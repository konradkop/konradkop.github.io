import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import pixelBackground from '../assets/pixelBackground.gif';

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
  const sceneRef = useRef<HTMLDivElement>(null);
  const [hoveredBall, setHoveredBall] = useState<string | null>(null);

  useEffect(() => {
    if (!sceneRef.current) return;
    sceneRef.current.innerHTML = '';

    const getDimensions = () => ({
      width: window.innerWidth * 0.99,
      height: window.innerHeight - 80,
    });

    let { width, height } = getDimensions();
    const initialWidth = width;
    const initialHeight = height;

    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 0.0, scale: 0.002 },
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

    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.gamma != null && event.beta != null) {
        const gammaRad = (event.gamma * Math.PI) / 180; // convert to radians
        const betaRad = (event.beta * Math.PI) / 180;

        engine.gravity.x = Math.sin(gammaRad); // -1 to 1
        engine.gravity.y = Math.sin(betaRad); // -1 to 1
      }
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation, true);
    }

    const balls = Object.entries(labelsObj).map(([, labelObj]) => {
      const randomX = Math.random() * width * 0.9 + width * 0.05;
      const randomY = Math.random() * height * 0.9 + height * 0.05;

      return {
        body: Matter.Bodies.circle(randomX, randomY, labelObj.ballSize, {
          restitution: 0.8,
          frictionAir: 0.001,
          render: {
            opacity: 0.8,
            fillStyle: labelObj.color,
            sprite: {
              texture: labelObj.image,
              xScale: (labelObj.ballSize * 2) / labelObj.imageSize,
              yScale: (labelObj.ballSize * 2) / labelObj.imageSize,
            },
          },
        }),
        label: labelObj.name,
        scaledUp: false,
        originalSize: labelObj.ballSize,
      };
    });

    const createWalls = () => [
      // top
      Matter.Bodies.rectangle(width / 2, 10, width, 20, {
        isStatic: true,
        render: { fillStyle: 'transparent' },
      }),
      // ground
      Matter.Bodies.rectangle(width / 2, height, width, 20, {
        isStatic: true,
        render: { fillStyle: 'transparent' },
      }),
      // left wall
      Matter.Bodies.rectangle(0, height / 2, 10, height, {
        isStatic: true,
        render: { fillStyle: 'transparent' },
      }),
      // right wall
      Matter.Bodies.rectangle(width, height / 2, 10, height, {
        isStatic: true,
        render: { fillStyle: 'transparent' },
      }),
    ];

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
      const clickedBall = balls.find(
        (ball) => Matter.Vertices.contains(ball.body.vertices, mousePosition),
        // Matter.Bounds.contains(ball.body.bounds, mousePosition),
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

    // Matter.World.clear(world, false);
    let walls = createWalls();
    Matter.World.add(world, [
      ...walls,
      ...balls.map((ball) => ball.body),
      mouseConstraint,
    ]);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    // Add slight random movement to each ball
    const randomMotionInterval = setInterval(() => {
      balls.forEach((ball) => {
        const randomX = (Math.random() - 0.5) * 0.01;
        const randomY = (Math.random() - 0.5) * 0.01;
        Matter.Body.applyForce(ball.body, ball.body.position, {
          x: randomX,
          y: randomY,
        });
      });
    }, 200);

    // Handle window resize
    const handleResize = () => {
      const { width: newWidth, height: newHeight } = getDimensions();

      // Update render size
      render.bounds.max.x = newWidth;
      render.bounds.max.y = newHeight;
      render.options.width = newWidth;
      render.options.height = newHeight;
      Matter.Render.setPixelRatio(render, window.devicePixelRatio);

      const scaleFactorW = newWidth / initialWidth;
      const scaleFactorH = newHeight / initialHeight;
      const scaleFactor = Math.min(scaleFactorW, scaleFactorH);

      balls.forEach((ball) => {
        const newSize = ball.originalSize * scaleFactor;
        const currentSize = ball.body.circleRadius || ball.originalSize;
        const scaleRatio = newSize / currentSize;

        Matter.Body.scale(ball.body, scaleRatio, scaleRatio);

        if (ball.body.render.sprite) {
          ball.body.render.sprite.xScale *= scaleRatio;
          ball.body.render.sprite.yScale *= scaleRatio;
        }
      });

      // Reposition walls
      Matter.World.remove(world, walls);
      width = newWidth;
      height = newHeight;
      walls = createWalls();
      Matter.World.add(world, walls);

      const newMouse = Matter.Mouse.create(render.canvas);
      mouseConstraint.mouse = newMouse;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.World.clear(world, false);
      clearInterval(randomMotionInterval);
      Matter.Engine.clear(engine);
      if (sceneRef.current) {
        sceneRef.current.innerHTML = '';
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return (
    <>
      <div
        ref={sceneRef}
        style={{
          backgroundImage: `url(${pixelBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </>
  );
};

export default Ball;
