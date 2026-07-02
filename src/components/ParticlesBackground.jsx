import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  async function init(engine) {
    await loadFull(engine);
  }

  return (
    <Particles
      init={init}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 60 },
          color: { value: "#38bdf8" },
          links: {
            enable: true,
            color: "#38bdf8",
            distance: 150,
          },
          move: { enable: true, speed: 1 },
          size: { value: 2 },
        },
      }}
    />
  );
}