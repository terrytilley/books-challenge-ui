import React from 'react';

function Book({ match }) {
  return (
    <main>
      <h1>Single Book Page</h1>
      <p>ID: {match.params.id}</p>
    </main>
  );
}

export default Book;
