import React from 'react';

function ExitOptions({ onThanks, onGoodbye }) {
  return (
    <div>
      <p>Have a good meal!</p>
      <button onClick={onThanks}>Thank you!</button>
      <button onClick={onGoodbye}>Good bye!</button>
    </div>
  );
}

export default ExitOptions;
