import { useState } from 'react'
import './App.css'

function generateRandomNumber() {
  return Math.floor(Math.random() * 101);
}

function App() {

  // lo usaremos para saber si el usuario ha introducido un numero más alto o más bajo. Además nos servirá si el usuario agota todos los intentos, para mostrarlo
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber())

  // tendremos que decrementar uno cada vez que el usuario introduzca un número
  const [remainingGuesses, setRemainingGuesses] = useState(1);

  // [4, 40, 20]
  const [previousGuesses, setPreviousGuesses] = useState([]);

  // del input
  const [currentGuess, setCurrentGuess] = useState('');

  // 'el número es menor' o 'el número es mayor'
  const [message, setMessage] = useState('');

  // ¿cual es el valor de randomNumber?
  console.log(randomNumber);

  const handleClick = () => {

    // decrementamos el número de intento. No podemos modificar directamente la variable remainingGuesses 
    setRemainingGuesses(remainingGuesses - 1);

    // actualizamos previousGuesses. Es un array de numbers
    setPreviousGuesses([...previousGuesses, currentGuess]);

    // limpiar el input
    setCurrentGuess('');

    // comprobar 
    if (currentGuess > randomNumber) {
      setMessage('The number is lower');
    } else {
      setMessage('The number is higher');
    }
  }

  // si la variable de estado es 0, es que ya hemos perdido!
  if (remainingGuesses === 0) {
    return <h1>Lo siento! el número era {randomNumber}</h1>
  }

  // como sabemos si hemos ganado?
  if (randomNumber == currentGuess) {
    return <h1>¡Has ganado!</h1>

  }



  return (
    <>
      <h1>Number guessing game</h1>
      <p>Try and guess a random number between 0   and 100.</p>
      <p>You have {remainingGuesses} attempts to guess the right number.</p>
      <br />
      <div id="wrapper">
        <label htmlFor="guessField" id="guess">Guess a number</label>
        <input type="number" id="guessField" class="guessField" max={100} min={0} value={currentGuess} onChange={(e) => setCurrentGuess(e.target.value)} />
        <button class="guessSubmit" onClick={handleClick}>Submit a Guess</button>

        <div class="resultParas">
          <p>Previous Guesses: <span class="guesses">{previousGuesses.join(' / ')}</span></p>
          <p>Guesses Remaining: <span class="lastResult">{remainingGuesses}</span></p>
          <p class="lowOrHi">{message}</p>
        </div>
      </div>
    </>
  )
}

export default App;


/*
JSX ya está impleemntado
Que variables de estado hay en esta app?

  A. Numero random que hay acertar. Valor inicial: un numero del 1 al 100
  B. El valor del input. valor inicial ''
  C. Los intentos restantes. valor inicial '10'
  D. Previous Guesses. valor inicial []
  E. Mensaje de información. valor inicial ''. Lo 
  usaremos para decir al usuario si "el número es menor" o
  "el número es mayor"

Codificad todos los estados y modificad el JSX
para que las partes que deban ser dinámcas, lo sean ahora*/