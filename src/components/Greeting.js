// import React from 'react'

// const Greeting = (props) => {
//   const greeting = ['Hola', 'Sawadee Kha', 'Maayung Adlaw'];
//   return (
//     // <h1>Hi {props.name},  !</h1>
//   );
// }

// export default Greeting

import React from 'react';

const Greeting = (props) => {
  const greeting = ['Hola', 'Sawadee Kha', 'Maayung Adlaw', 'Bonjour'];
  let message = '';
  if (props.name === 'John') {
    message = `${greeting[0]} ${props.name} !`;
  } else if (props.name === 'Mary') {
    message = `${greeting[1]} ${props.name} !`;
  } else if (props.name === 'Alex') {
    message = `${greeting[2]} ${props.name} !`;
  } else if (props.name === 'Sarah') {
    message = `${greeting[3]} ${props.name} !`;
  } else {
    message = `Hello there ${props.name}!`;
  }
  return (
    <h1 className='message'>{message}</h1>
  );
}

export default Greeting;