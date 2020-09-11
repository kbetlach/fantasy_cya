import React from 'react';
import './button.css';

function Button(props) {
  return (
    <div class="col-md-12 text-center">
        <button type="button" class="text-center" {...props}>
        </button>
    </div>
  );
}

export default Button;