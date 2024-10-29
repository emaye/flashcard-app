import React from 'react';
import './index.css';

function ProgressBar({ current, total }) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
      <p>
        {current + 1} / {total}
      </p>
    </div>
  );
}

export default ProgressBar;
