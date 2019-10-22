'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events')

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
  $('.border').on('click', events.onClick)
  $('#enterSelections').on('submit', events.onEnterSelections)
  $('#viewSelections').on('click', events.onViewSelections)
  $('#updateSelections').on('submit', events.onUpdateSelections)
  $('#viewOneSelection').on('submit', events.onViewOneSelection)
  $('#deleteOneSelection').on('submit', events.onDeleteOneSelection)
  // $('.start-game').on('click', events.onCreateGame)

  // when start game button is clicked, run a function to gameEvents.playGame
  // remove the hide class from the #main element (board)
})
