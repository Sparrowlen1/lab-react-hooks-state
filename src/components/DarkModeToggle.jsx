import React from 'react';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode} className="dark-mode-toggle">
      Toggle {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default DarkModeToggle;