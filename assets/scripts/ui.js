// do we need the 'use strict' here?
'use strict'

const store = require('./store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}
const onSignUpSuccess = function () {
  successMessage('Signed up successfully!')
}

const onSignUpFailure = function () {
  failureMessage('Sign up failed.')
}

// responseData is the data the API sends back when we make a request
// In this case, it has our 'user' and our 'user's token'
const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  console.log('responseData is', responseData)
  //  save the 'user' we got from the API inside of 'store' so we
  //  can use it later from any file
  store.user = responseData.user
  console.log('store is', store)
  // can hide signIn button after signing in by putting   $('#sign-in').hide here
}

const onSignInFailure = function () {
  failureMessage('Sign in failed.')
}

const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully!')
}

const onChangePasswordFailure = function () {
  failureMessage('Password change failed.')
}

const onSignOutSuccess = function () {
  successMessage('Signed out successfully!')
}

const onSignOutFailure = function () {
  failureMessage('Sign out failed.')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}

// const signUpSuccess = function (response) {
//   console.log('Success! response is', response)
//   // clear the form
//   $('#sign-up').trigger('reset')
//   // give feedback to user
//   $('#message').html("<span class='success'>Success</span>")

// const signUpFailure = function (response) {
//   console.log('Failure! response is', response)
//   // clear the form
//   $('#sign-up').trigger('reset')
//   // give feedback to user
//   $('#message').html("<span class='error'>Failure</span>")
// }
