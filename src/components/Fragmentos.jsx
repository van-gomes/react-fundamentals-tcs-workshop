import React from 'react';

// export function Posts() {
//   return (
//       <h1>Olá</h1>
//       <p>Seja bem-vindo!</p>
//   );
// }

function Header() {
  return (
    <React.Fragment>
      <h1>Header</h1>
      <p>Seja bem-vindo!</p>
    </React.Fragment>
  );
}

function Post() {
  return (
    <div className="post">
      <h1>Post</h1>
      <p>Este é um post.</p>
    </div>
  );
}

function Comment() {
  return (
    <>
      <h1 styles={{ color: '#8257e6' }}>Comentário</h1>
    </>
  );
}

function OnePost() {
  //Aqui poderia ter uma lógica para buscar um post específico
  return null;
}

export function Fragmentos() {
  return (
    <div>
      {/* <OnePost /> */}
      <OnePost />
      <Header />
      <Post />
      <Post />
      <Post />
      <Comment />
    </div>
  );
}
