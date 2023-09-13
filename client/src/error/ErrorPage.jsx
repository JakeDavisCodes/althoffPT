import React from 'react';
import Header from '../components/Header.jsx';

const ErrorPage = () => {

  return (
    <div id="error-page">
      <Header />
      <span className="big-text-wrapper">
        <h1 className="oops">Oops!</h1>
        <p className="desc">Sorry, an unexpected error has occurred.</p>
        <p>
          <i className="error-code">404</i>
        </p>
      </span>
    </div>
  );
}

export default ErrorPage;