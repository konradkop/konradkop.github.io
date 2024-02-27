import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesComponent({ particles }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [particles]);

  const particlesLoaded = (container) => {};

  const options = useMemo(
    () => ({
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "grab",
          },
          onHover: {
            enable: true,
            mode: "grab",
            parallax: {
              enable: true,
              force: 60,
              smooth: 10,
            },
          },
        },
        modes: {
          push: {
            quantity: 1,
          },
          grab: {
            distance: 300,
            links: {
              opacity: 0.75,
              consent: false,
              blink: true,
            },
          },
        },
      },
      particles: {
        collisions: {
          bounce: {
            horizonal: 1,
            vertical: 1,
          },
          enable: true,
        },
        color: {
          value: "#ffffff",
        },
        move: {
          direction: "none",
          enable: true,
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          limit: 25,
          value: 7,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 10 },
        },
      },
      detectRetina: true,
      pauseOnOutsideViewport: true,
    }),
    [],
  );

  if (!particles) {
    return;
  }

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
}
