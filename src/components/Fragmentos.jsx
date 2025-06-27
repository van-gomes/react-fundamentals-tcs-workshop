import React from 'react';

// export function OnePost() {
//   return (
//       <h1>Olá</h1>
//       <p>Seja bem-vindo!</p>
//   );
// }

function TwoPost() {
  return (
    <div>
      <h1>Post</h1>
      <p>Este é o componente Post.</p>
    </div>
  );
}

function ThreePost() {
  return (
    <>
      <h1>Elemento 1</h1>
      <p>Elemento 2</p>
    </>
  );
}

function FourPost() {
  return (
    <React.Fragment>
      <h1>Elemento 1</h1>
      <p>Elemento 2</p>
    </React.Fragment>
  );
}

export function Fragmentos() {
  return (
    <div>
      {/* <OnePost /> */}
      <TwoPost />
      <ThreePost />
      <FourPost />
    </div>
  );
}
