import React from 'react';
import Header from '../components/Header.jsx';

const ErrorPage = () => {

  return (
    <div id="error-page">
      <Header />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>404</i>
      </p>
    </div>
  );
}

export default ErrorPage;