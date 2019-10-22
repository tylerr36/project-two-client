// do we need the 'use strict' here?
'use strict'

const store = require('./store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('form').trigger('reset')
}

const onSignUpSuccess = function (data) {
  console.log(data)
  successMessage('Signed up successfully! Please sign in!')
  // setTimeout(function () { $('#message').text('') }, 1000)
}

const onSignUpFailure = function () {
  failureMessage('Sign up failed.')
  // setTimeout(function () { $('#message').text('') }, 10000)
}

// responseData is the data the API sends back when we make a request
// In this case, it has our 'user' and our 'user's token'
const onSignInSuccess = function (responseData) {
  console.log(responseData)
  successMessage('Welcome back!')
  // $('#message').fadeOut(4050)
  // setTimeout(function () { $('#message').text('') }, 2000)
  $('.after-sign-in').show()
  $('.before-sign-in').hide()

  // add .hide somewhere in here using jQuery
  //  save the 'user' we got from the API inside of 'store' so we
  //  can use it later from any file
  store.user = responseData.user
  console.log(store.user.id)
  // can hide signIn button after signing in by putting   $('#sign-in').hide here
}

const onEnterSelectionsSuccess = function (responseData) {
  console.log('helloooooooooooooo')
  // $('#message').fadeIn(1000)
  successMessage('Apartment specs saved!')
  // setTimeout(function () { $('#message').text('') }, 4000)
  $('.after-sign-in').show()
  // $('.before-sign-in').hide()
  // $('#message').fadeOut(2850)
  // $('.after-sign-in').show()
  // $('.before-sign-in').hide()
  // add .hide somewhere in here using jQuery
  //  save the 'user' we got from the API inside of 'store' so we
  //  can use it later from any file
  // store.user = responseData.user
}

// const onViewSelectionsSuccess = (data) => {
//   $('.content').html(data.apartments)
// }

// const onViewSelectionsSuccess = function (responseData) {
//   console.log('this is response data:', responseData)
//   successMessage('Here are your saved apartment specs!')
//   // $('#message').fadeOut(20050)
// }
// click button, call to api, store data...in store

const onViewSelectionsSuccess = function (data) {
  $('#apartment-message').html('')
  data.apartments.forEach(apartment => {
    const apartmentHTML = (`
 <p>ID: ${apartment.id}</p>
 <p>Country: ${apartment.country}</p>
<p>City: ${apartment.city}</p>
<p>Price: ${apartment.price}</p>
<p>Ski Distance: ${apartment.ski_distance}</p>
 <p>Ocean Distance: ${apartment.ocean_distance}</p>
 <p>Airport Distance: ${apartment.airport_distance}</p>
  <br>
 `)
    $('#apartment-message').append(apartmentHTML)
  })
}

const onSignInFailure = function () {
  failureMessage('Sign in failed.')
}

const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully!')
  // $('#message').fadeOut(2050)
  // setTimeout(function () { $('#message').text('') }, 3000)
}

const onChangePasswordFailure = function () {
  failureMessage('Password change failed.')
  // setTimeout(function () { $('#message').text('') }, 7000)
}

const onSignOutSuccess = function () {
  successMessage('Thanks for stopping by! See you next time!')
  // setTimeout(function () { $('#message').text('') }, 4000)
  $('.after-sign-in').hide()
  $('.before-sign-in').show()
  store.user = ''
}

const onSignOutFailure = function () {
  failureMessage('Sign out failed.')
}

// const onCreateGameSuccess = function (responseData) {
//   successMessage('Created new game!')
//   store.game = responseData.game
//   $('.border').text('')
//   $('#main').removeClass('hide')
// }

// const onCreateGameFailure = function () {
//   failureMessage('Game creation failed!')
//   $('.game').text('')
// }

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onEnterSelectionsSuccess,
  onViewSelectionsSuccess
//  onCreateGameSuccess,
//  onCreateGameFailure
}
