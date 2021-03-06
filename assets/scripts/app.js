'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('.box').on('click', authEvents.onBoxClick)
  $('.box').on('click', authEvents.checkWinner)
  $('.box').on('click', authEvents.changeTurn)
  $('#new-game').on('submit', authEvents.onNewGame)
})
