import "../../styles/particles.css"
const Particles = () => {
  // Function to create a particle with random properties
  const createParticle = () => {
    const size = Math.random() * 5 + 5; // Random size between 5px and 10px
    const left = Math.random() * 100; // Random left position (percentage)
    const top = Math.random() * 100; // Random top position (percentage)
    const animationDuration = Math.random() * 3 + 2; // Random duration between 2s and 5s

    return (
      <div
        key={Math.random()} // Unique key for each particle
        className="particle"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          top: `${top}%`, // Set the top position to make it float down
          animationDuration: `${animationDuration}s`,
        }}
      />
    );
  };

  return (
    <div className="particle-container">
      {/* Create multiple particles */}
      {Array.from({ length: 100 }).map(createParticle)}
    </div>
  );
};

export default Particles;
