import React, { useEffect, useRef } from 'react';
import './Snowfall.css';

const Snowfall = ({ count = 50, color = 'rgba(255, 255, 255, 0.8)', sizeRange = [1, 3] }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear previous snowflakes
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    // Create snowflakes
    for (let i = 0; i < count; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snow';

      // Random properties
      const opacity = 0.5 + Math.random() * 0.5;
      const size = sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]);
      const x = Math.random() * 100;
      const xEnd = x + (Math.random() * 2 - 1) * 10;
      const duration = 10 + Math.random() * 20;
      const delay = Math.random() * -30;
      const blur = Math.random() * 2;

      snowflake.style.setProperty('--opacity', opacity);
      snowflake.style.setProperty('--size', `${size}px`);
      snowflake.style.setProperty('--x', `${x}vw`);
      snowflake.style.setProperty('--x-end', `${xEnd}vw`);
      snowflake.style.setProperty('--duration', `${duration}s`);
      snowflake.style.setProperty('--delay', `${delay}s`);
      snowflake.style.setProperty('--blur', `${blur}px`);
      snowflake.style.setProperty('--color', color);

      container.appendChild(snowflake);
    }
  }, [count, color, sizeRange]);

  return <div ref={containerRef} className="snow-background" />;
};

export default Snowfall;