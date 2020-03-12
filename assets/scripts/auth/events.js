'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('Signing Up')
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  console.log('Signing In')
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  console.log('Signing Out')
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  console.log('Change Password')
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}





let gameBoard = [
  '', '', '',
  '', '', '',
  '', '', ''
]

let currentPlayer = 'X'


const winnerMessage = () => `Player ${currentPlayer} has won!`;
const drawBoard = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;




// const winningConditions = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]

const onBoxClick = function (event) {
  console.log('Box is Clicked')
  // $(event.target).text('X')


  if (($(event.target).text() === '' || $(event.target).text() !== 'O') && currentPlayer === 'X') {
    $(event.target).text('X')
    gameBoard[event.target.id] = 'X'
    currentPlayer = 'O'
    console.log(gameBoard)
  }
  if (($(event.target).text() === '' || $(event.target).text() !== 'X') && currentPlayer === 'O') {
    $(event.target).text('O')
    gameBoard[event.target.id] = 'O'
    currentPlayer = 'X'
    console.log(gameBoard)
  }
}
const onNewGame = function (event) {
  event.preventDefault()
  console.log('New Game')
  const data = getFormFields(event.target)
  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}






module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onBoxClick,
  onNewGame,
  gameBoard,
  winnerMessage,
  drawBoard,
  currentPlayerTurn

}
