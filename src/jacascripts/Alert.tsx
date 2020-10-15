import * as React from 'react'

const Alert = (props: {message: string}) => {
  return (
    <div>
      <h1>
      This is {props.message}
      </h1>
    </div>
  );
};

export default Alert;