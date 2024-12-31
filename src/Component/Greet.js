import React from 'react';

export default function Greet(props) {
  return (
    <div className='container card p-3 mt-2 registered'>
      <h2>Welcome, {props.name}!</h2>
      <h2>Your email: {props.email}</h2>
      <h2>Thanks for registeration!</h2>
    </div>
  );
}
