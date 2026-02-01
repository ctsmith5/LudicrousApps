import React from 'react';
import './css/Toggle.css';

interface ToggleProps {
  isOn: boolean;
  handleToggle: () => void;
  label?: string;
  icons?:[string, string];
  id: string;
}

const Toggle: React.FC<ToggleProps> = ({ isOn, handleToggle, label, icons, id }) => {
  return (
    <div className="toggle-wrapper">
      {label && <span className="toggle-label">{label}</span>}
      <label className="switch" htmlFor={id}>
        <input 
          id={id}
          type="checkbox" 
          checked={isOn} 
          onChange={handleToggle} 
        />
        <span className="slider round">
          {icons && (
            <span className="slider-icon">{icons[isOn ? 0 : 1]}</span>
          )}
        </span>
      </label>
    </div>
  );
};

export default Toggle;
