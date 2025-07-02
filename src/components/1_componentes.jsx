import { Fragment } from 'react';
// export function Posts() {
//   return (
//       <h1>Olá</h1>
//       <p>Seja bem-vindo!</p>
//   );
// }

function Header() {
  return (
    <Fragment>
      <h1>Header</h1>
      <p>Seja bem-vindo!</p>
    </Fragment>
  );
}

function Comment() {
  return (
    <>
      <h1 styles={{ color: '#8257e6' }}>Comentário</h1>
      <p>Este é um comentário.</p>
      <p>Este é outro comentário.</p>
      <p>Este é mais um comentário.</p>
    </>
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

function OnePost() {
  //Aqui poderia ter uma lógica para buscar um post específico
  return null;
}

export function ExemplosComponentes() {
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
