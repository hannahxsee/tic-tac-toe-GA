'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess data is: ', data)
}
const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signUpFailure error is: ', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess data is: ', data)
  store.user = data.user
}
const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signInFailure error is: ', error)
}
const signOutSuccess = function (data) {
  $('#message').text('Signed out successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signOutSuccess data is: ', data)
}
const signOutFailure = function (error) {
  $('#message').text('Error on signing out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signOutFailure error is: ', error)
}
const changePasswordSuccess = function (data) {
  $('#message').text('Changed Password successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('changePasswordSuccess data is: ', data)
}
const changePasswordFailure = function (error) {
  $('#message').text('Error on changing password')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('changePasswordFailure error is: ', error)
}
const newGameSuccess = function (data) {
  $('#message').text('New Game Successfull')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('newGameSuccess data is: ', data)
  store.user = data.user
}
const newGameFailure = function (error) {
  $('#message').text('Error on new game')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('newGameFailure error is: ', error)
}
const winnerXSuccess = function () {
  $('#message').text('Player X Wins!')
  $('#message').removeClass()
  $('#message').addClass('xMove')
}
const winnerOSuccess = function () {
  $('#message').text('Player O Wins!')
  $('#message').removeClass()
  $('#message').addClass('oMove')
}
const xMove = function () {
  $('#message').text('Player X Turn')
  $('#message').removeClass()
  $('#message').addClass('playerXTurn')
}
const oMove = function () {
  $('#message').text('Player O Turn')
  $('#message').removeClass()
  $('#message').addClass('playerOTurn')
}
const gameDraw = function () {
  $('#message').text('Tie!')
  $('#message').removeClass()
  $('#message').addClass('draw')
}
const engineUpdateSuccess = function (data) {
  $('#message').text('Updated Successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('engineUpdateSuccess data is: ', data)
}
const engineUpdateFailure = function (error) {
  $('#message').text('Update Failure')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('engineUpdateFailure error is: ', error)
}
const clickError = function (error) {
  $('#message').text('Please click on one of the boxes!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log(' clickError error is: ', error)
}
const onGameOver = function (data) {
  $('#message').text('Game Over! Player Wins!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('gameOver data is: ', data)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  newGameSuccess,
  newGameFailure,
  winnerXSuccess,
  winnerOSuccess,
  xMove,
  oMove,
  gameDraw,
  engineUpdateSuccess,
  engineUpdateFailure,
  clickError,
  onGameOver
}
