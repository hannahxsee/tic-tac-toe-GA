'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

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
const onNewGame = function (event) {
  event.preventDefault()
  console.log('New Game')
  const data = getFormFields(event.target)
  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onWinner = function () {
  event.preventDefault()
  console.log('Winner')
  const data = getFormFields(event.target)
  api.winner()
    .then(ui.winnerXSuccess)
    .catch(ui.winnerOSuccess)
}

let currentPlayer = 'X'

const gameBoard = [
  '', '', '',
  '', '', '',
  '', '', ''
]

const onWinner = function (gameBoard) {
  console.log('checking for winner')
  if ((gameBoard[0] === 'X' || gameBoard[0] === 'O') && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
    store.game.over = true
    if (gameBoard[0] === 'X') {
      ui.WinnerXSuccess()
    } else {
      ui.winnerOSuccess()
    }
  } else if ((gameBoard[3] === 'X' || gameBoard[3] === 'O') && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
    store.game.over = true
    if (gameBoard[0] === 'X') {
      ui.WinnerXSuccess()
    } else {
      ui.winnerOSuccess()
    }
  } else if ((gameBoard[6] === 'X' || gameBoard[6] === 'O') && gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
    store.game.over = true
    if (gameBoard[0] === 'X') {
      ui.WinnerXSuccess()
    } else {
      ui.winnerOSuccess()
    }
  } else if ((gameBoard[0] === 'X' || gameBoard[0] === 'O') && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
    store.game.over = true
    if (gameBoard[0] === 'X') {
      ui.WinnerXSuccess()
    } else {
      ui.winnerOSuccess()
    }
  } else if ((gameBoard[1] === 'X' || gameBoard[1] === 'O') && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
    store.game.over = true
    if (gameBoard[0] === 'X') {
      ui.WinnerXSuccess()
    } else {
      ui.winnerOSuccess()
    }
  } else if ((gameBoard[2] === 'X' || gameBoard[2] === 'O') && gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
    store.game.over = true
    if (gameBoard[0] === 'X') {
      ui.WinnerXSuccess()
    } else {
      ui.winnerOSuccess()
    }
  } else if ((gameBoard[0] === 'X' || gameBoard[0] === 'O') && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
    store.game.over = true
    if (gameBoard[0] === 'X') {
      ui.WinnerXSuccess()
    } else {
      ui.winnerOSuccess()
    }
  } else if ((gameBoard[2] === 'X' || gameBoard[2] === 'O') && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
    store.game.over = true
    if (gameBoard[0] === 'X') {
      ui.WinnerXSuccess()
    } else {
      ui.winnerOSuccess()
    }
  }
}

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

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onBoxClick,
  onNewGame,
  gameBoard,
  onWinner
}
