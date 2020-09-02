import React from 'react';

function Button(props) {
  return (
    <div>
        <button type="button" class="btn btn-primary" {...props}>

        </button>
    </div>
  );
}

export default Button;