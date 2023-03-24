import { useState } from 'react';
// import {Route} from 'react-router-dom';
// import callToApi from '../services/api';
// import ls from '../services/localStorage';

import '../styles/App.scss';

function App() {
  // VARIABLES ESTADO
  const [word, setWord] = useState('pepino');
  const [userLetters, setUserLetters] = useState([]);
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [allowed, setAllowed] = useState(false);

  // USE EFFECT

  // FUNCIONES HANDLER
  function handleClick(ev) {
    ev.preventDefault();
    setNumberOfErrors(numberOfErrors + 1);
  }

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
  };

  function handleLastLetter(ev) {
    const userLetter = ev.target.value;

    if (/^[a-z]$/.test(userLetter)) {
      setLastLetter(userLetter);
      if (!userLetters.includes(userLetter)) {
        setUserLetters([...userLetters, userLetter]);
      }
      setAllowed(false);
    } else if (userLetter === '') {
      setAllowed(false);
    } else {
      setAllowed(true);
    }
  }

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML
  function renderSolutionLetters() {
    const wordLetters = word.split('');
    return wordLetters.map((letter, index) => {
      if (userLetters.includes(letter)) {
        return (
          <li className="letter" key={index}>
            {letter}
          </li>
        );
      } else {
        return <li className="letter" key={index}></li>;
      }
    });
  }

  // HTML EN EL RETURN

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Hangman Game</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solution:</h2>
            <ul className="letters">{renderSolutionLetters()}</ul>
          </div>
          <div className="error">
            <h2 className="title">Failed letters:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form" onSubmit={handleFormSubmit}>
            <label className="title" htmlFor="last-letter">
              Write a letter:
            </label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              name="last-letter"
              id="last-letter"
              onInput={handleLastLetter}
            />
            <p className={allowed ? 'visible' : 'hidden'}>
              Is not an allowed character
            </p>
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
        <button onClick={handleClick}>Incrementar</button>
      </main>
    </div>
  );
}

export default App;
