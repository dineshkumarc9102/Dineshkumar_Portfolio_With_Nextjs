
const ShinyText = ({ text, disabled = false, speed = 5, className = '', isDarkMode }) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`text-[#000000] dark:text-[#ffffffa4]
      bg-clip-text inline-block font-Ovo
      ${!disabled && isDarkMode ? 'animate-shine' : ''} ${className}`} style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration,
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
