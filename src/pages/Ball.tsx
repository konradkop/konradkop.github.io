import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { useMediaQuery } from '@mantine/hooks';

interface LabelItem {
  name: string;
  color: string;
  imageSize: number;
  image: string;
  ballSize: number;
}

interface LabelsObj {
  [key: string]: LabelItem;
}

interface BallProps {
  open: () => void;
  labelsObj: LabelsObj;
  setCurrLabel: React.Dispatch<React.SetStateAction<string>>;
}

const scaleNumber = 1.2;

const Ball: React.FC<BallProps> = ({ open, labelsObj, setCurrLabel }) => {
  const isMobile = useMediaQuery('(max-width: 50em)');

  const sceneRef = useRef<HTMLDivElement>(null);
  const [hoveredBall, setHoveredBall] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!sceneRef.current) return;
    sceneRef.current.innerHTML = '';

    const width = window.innerWidth * 0.99;
    const height = window.innerHeight - 185;

    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 1, scale: 0.002 },
    });
    const world = engine.world;

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: 'transparent',
      },
    });

    const balls = Object.entries(labelsObj).map(([, labelObj], index) => {
      return {
        body: Matter.Bodies.circle(
          100 + index * (width / Object.keys(labelsObj).length),
          100 + (isMobile ? index : 1) * 30,
          labelObj.ballSize,
          {
            restitution: 0.8,
            frictionAir: 0.001,
            render: {
              fillStyle: labelObj.color,
              sprite: {
                texture: labelObj.image,
                xScale: (labelObj.ballSize * 2) / labelObj.imageSize,
                yScale: (labelObj.ballSize * 2) / labelObj.imageSize,
              },
            },
          },
        ),
        label: labelObj.name,
        scaledUp: false,
      };
    });

    const top = Matter.Bodies.rectangle(width / 2, 10, width, 20, {
      isStatic: true,
      render: { fillStyle: 'transparent' },
    });

    const ground = Matter.Bodies.rectangle(width / 2, height, width, 20, {
      isStatic: true,
      render: { fillStyle: 'transparent' },
    });

    const leftWall = Matter.Bodies.rectangle(0, height / 2, 10, height, {
      isStatic: true,
      render: { fillStyle: 'transparent' },
    });

    const rightWall = Matter.Bodies.rectangle(width, height / 2, 10, height, {
      isStatic: true,
      render: { fillStyle: 'transparent' },
    });

    const hoop = Matter.Bodies.rectangle(width / 2, height * 0.4, 250, 20, {
      isStatic: true,
      isSensor: true,
      render: { fillStyle: 'red' },
    });

    // const leftSquare = Matter.Bodies.trapezoid(
    //   width / 2 - 150,
    //   height * 0.36,
    //   10,
    //   200,
    //   0.3,
    //   {
    //     isStatic: true,
    //     angle: -Math.PI / 6,
    //     render: { fillStyle: 'blue' },
    //   },
    // );

    // const rightSquare = Matter.Bodies.trapezoid(
    //   width / 2 + 150,
    //   height * 0.36,
    //   10,
    //   200,
    //   0.3,
    //   {
    //     isStatic: true,
    //     angle: Math.PI / 6,
    //     render: { fillStyle: 'blue' },
    //   },
    // );

    Matter.Events.on(engine, 'collisionStart', (event) => {
      event.pairs.forEach(({ bodyA, bodyB }) => {
        const ball = balls.find((b) => b.body === bodyA || b.body === bodyB);
        if (ball && (bodyA === hoop || bodyB === hoop)) {
          setScore((prev) => prev + 1);
        }
      });
    });

    // Add mouse control for dragging
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }, // Hides the interaction lines
      },
    });

    // Detect clicks on the balls
    Matter.Events.on(mouseConstraint, 'mouseup', (event) => {
      const mousePosition = event.mouse.position;
      const clickedBall = balls.find((ball) =>
        Matter.Bounds.contains(ball.body.bounds, mousePosition),
      );

      if (clickedBall) {
        setCurrLabel(clickedBall.label);
        open();
      }
    });

    Matter.Events.on(engine, 'beforeUpdate', () => {
      balls.forEach((ball) => {
        if (!Matter.Bounds.overlaps(ball.body.bounds, render.bounds)) {
          Matter.Body.setPosition(ball.body, {
            x: Math.min(Math.max(ball.body.position.x, 50), width - 50),
            y: Math.min(Math.max(ball.body.position.y, 50), height - 50),
          });
          Matter.Body.setVelocity(ball.body, { x: 0, y: 0 });
        }
      });
    });

    // Detect mouse hover over balls using MouseConstraint
    Matter.Events.on(mouseConstraint, 'mousemove', (event) => {
      const mousePosition = event.mouse.position;
      const hovered = balls.find((ball) =>
        Matter.Bounds.contains(ball.body.bounds, mousePosition),
      );

      // If the mouse is hovering over a ball, scale it up only once
      if (hovered) {
        if (!hovered.scaledUp) {
          // Scale the ball up by 20%
          Matter.Body.scale(hovered.body, scaleNumber, scaleNumber);
          if (hovered.body.render.sprite) {
            hovered.body.render.sprite.xScale *= scaleNumber;
            hovered.body.render.sprite.yScale *= scaleNumber;
          }
          hovered.scaledUp = true; // Mark the ball as scaled up
        }
        setHoveredBall(hovered.label);

        // scales back the previous ball
        balls.forEach((singleBall) => {
          if (singleBall.label !== hovered.label) {
            if (singleBall.scaledUp) {
              Matter.Body.scale(
                singleBall.body,
                1 / scaleNumber,
                1 / scaleNumber,
              );
              if (singleBall.body.render.sprite) {
                singleBall.body.render.sprite.xScale /= scaleNumber;
                singleBall.body.render.sprite.yScale /= scaleNumber;
              }
              singleBall.scaledUp = false;
            }
          }
        });
      } else {
        // Revert the size of previously scaled balls (those that are not hovered)
        balls.forEach((singleBall) => {
          if (singleBall.label !== hoveredBall) {
            if (singleBall.scaledUp) {
              // Revert scaling back to original size
              Matter.Body.scale(
                singleBall.body,
                1 / scaleNumber,
                1 / scaleNumber,
              );
              // Revert sprite scaling to original size
              if (singleBall.body.render.sprite) {
                singleBall.body.render.sprite.xScale /= scaleNumber;
                singleBall.body.render.sprite.yScale /= scaleNumber;
              }
              singleBall.scaledUp = false; // Reset the scaledUp flag
            }
          }
        });
        setHoveredBall(null);
      }
    });

    Matter.World.clear(world, false);
    Matter.World.add(
      world,
      balls.map((ball) => ball.body),
    );
    Matter.World.add(world, [
      top,
      ground,
      leftWall,
      rightWall,
      mouseConstraint,
      // keep the hoop not working for now
      // hoop,
      // leftSquare,
      // rightSquare,
    ]);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.World.clear(world, false);
      Matter.Engine.clear(engine);
      if (sceneRef.current) {
        sceneRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      <div ref={sceneRef} />
      {score > 0 && (
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          Score: {score}
        </div>
      )}
    </>
  );
};

export default Ball;
