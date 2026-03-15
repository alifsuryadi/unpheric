import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const AmbientParticles = () => {

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: { color: "transparent" },
        particles: {
          number: { value: 40 },
          color: { value: "#a855f7" },
          opacity: { value: 0.2 },
          size: { value: 2 },
          move: {
            enable: true,
            speed: 0.3,
          },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default AmbientParticles;