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
  // // console.log(data)
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
  // console.log(responseData)
  successMessage('Welcome back!')
  // $('#message').fadeOut(4050)
  // setTimeout(function () { $('#message').text('') }, 2000)
  $('.after-sign-in').show()
  $('.before-sign-in').hide()

  // add .hide somewhere in here using jQuery
  //  save the 'user' we got from the API inside of 'store' so we
  //  can use it later from any file
  store.user = responseData.user
  // console.log(store.user.id)
  // can hide signIn button after signing in by putting   $('#sign-in').hide here
}

const onSignInFailure = function () {
  failureMessage('Sign in failed.')
}

const onEnterSelectionsSuccess = function (responseData) {
  // // console.log('helloooooooooooooo')
  // $('#message').fadeIn(1000)
  successMessage('Apartment specs saved!')
  // setTimeout(function () { $('#message').text('') }, 4000)
  // $('.after-sign-in').show()
  // $('.before-sign-in').hide()
  // $('#message').fadeOut(2850)
  // $('.after-sign-in').show()
  // $('.before-sign-in').hide()
  // add .hide somewhere in here using jQuery
  //  save the 'user' we got from the API inside of 'store' so we
  //  can use it later from any file
  // store.user = responseData.user
}

const onEnterSelectionsFailure = function (responseData) {
  // // console.log('helloooooooooooooo')
  // $('#message').fadeIn(1000)
  failureMessage('Failure saving apartment specs!')
}

// const onViewSelectionsSuccess = (data) => {
//   $('.content').html(data.apartments)
// }

// const onViewSelectionsSuccess = function (responseData) {
//   // console.log('this is response data:', responseData)
//   successMessage('Here are your saved apartment specs!')
//   // $('#message').fadeOut(20050)
// }
// click button, call to api, store data...in store

const onViewSelectionsSuccess = function (data) {
  successMessage('Here are your saved apartment preferences!')
  $('#apartment-message').html('')
  $('#apartment-message2').html('')
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
  $('#apartment-message').show()
}

const onViewOneSelectionSuccess = function (data) {
  successMessage('Here is your apartment preference!')
  $('#apartment-message2').html('')
  $('#apartment-message').html('')
  // data.apartment.id apartment
  // // console.log('this is from ui ' + data.apartment.id)
  const apartmentHTML = (`
 <p>ID: ${data.apartment.id}</p>
 <p>Country: ${data.apartment.country}</p>
<p>City: ${data.apartment.city}</p>
<p>Price: ${data.apartment.price}</p>
<p>Ski Distance: ${data.apartment.ski_distance}</p>
 <p>Ocean Distance: ${data.apartment.ocean_distance}</p>
 <p>Airport Distance: ${data.apartment.airport_distance}</p>
  <br>
 `)
  $('#apartment-message2').append(apartmentHTML)

  $('#apartment-message2').show()
}

const onViewOneSelectionFailure = function (data) {
  failureMessage('Apartment preference retrieval failed! Make sure you are entering a valid ID!')
}

// const onViewOneSelectionFailure = function (data) {
//  failureMessage('Apartment preference retrieval failed! Make sure you are entering a valid ID!')
// $('#apartment-message2').html('')
// $('#apartment-message').html('')
// data.apartment.id apartment
// // console.log('this is from ui ' + data.apartment.id)
//   const apartmentHTML = (`
//  <p>ID: ${data.apartment.id}</p>
//  <p>Country: ${data.apartment.country}</p>
// <p>City: ${data.apartment.city}</p>
// <p>Price: ${data.apartment.price}</p>
// <p>Ski Distance: ${data.apartment.ski_distance}</p>
//  <p>Ocean Distance: ${data.apartment.ocean_distance}</p>
//  <p>Airport Distance: ${data.apartment.airport_distance}</p>
//   <br>
//  `)
//   $('#apartment-message2').append(apartmentHTML)
//
//   $('#apartment-message2').show()
// }

const onDeleteOneSelectionSuccess = function (data) {
  successMessage('Apartment preference deleted!')
  $('#apartment-message2').html('')
  $('#apartment-message').html('')
  $('#apartment-delete').html('')
  // data.apartment.id apartment
//  // console.log('this is from ui ' + data.apartment.id)
//   const apartmentHTML = (`
//  <p>ID: ${data.apartment.id}</p>
//  <p>Country: ${data.apartment.country}</p>
// <p>City: ${data.apartment.city}</p>
// <p>Price: ${data.apartment.price}</p>
// <p>Ski Distance: ${data.apartment.ski_distance}</p>
//  <p>Ocean Distance: ${data.apartment.ocean_distance}</p>
//  <p>Airport Distance: ${data.apartment.airport_distance}</p>
//   <br>
//  `)
//  $('#apartment-delete').append(apartmentHTML)

//  $('#apartment-delete').show()
}

const onDeleteOneSelectionFailure = function (data) {
  failureMessage('Please enter a valid ID to delete!')
  // $('#apartment-message2').html('')
  // $('#apartment-message').html('')
  // $('#apartment-delete').html('')
}

const onUpdateSelectionsSuccess = function (responseData) {
  // console.log('helloooooooooooooo')
  // $('#message').fadeIn(1000)
  successMessage('Apartment specs updated! Click "View all saved preferences" to see your updated list!')
  $('#apartment-message').hide()
  $('#apartment-message2').hide()
  // setTimeout(function () { $('#message').text('') }, 4000)
  // $('.after-sign-in').show()
}

const onUpdateSelectionsFailure = function (responseData) {
  // console.log('helloooooooooooooo')
  // $('#message').fadeIn(1000)
  failureMessage('Apartment update failed!')
  // setTimeout(function () { $('#message').text('') }, 4000)
  // $('.after-sign-in').show()
}

const onViewSelectionsFailure = function () {
  failureMessage('Apartment viewing failed!')
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

const onEnterCarSelectionsSuccess = function (responseData) {
  successMessage('Car specs saved!')
}

const onEnterCarSelectionsFailure = function (responseData) {
  failureMessage('Failure saving car specs!')
}

const onViewCarSelectionsSuccess = function (data) {
  successMessage('Here are your saved car preferences!')
  $('#car-message').html('')
  $('#car-message2').html('')
  data.cars.forEach(car => {
    const carHTML = (`
 <p>ID: ${car.id}</p>
 <p>Make: ${car.make}</p>
<p>Model: ${car.model}</p>
<p>Year: ${car.year}</p>
<p>MPG Min: ${car.mpg_min}</p>
 <p>Price Max: ${car.price_max}</p>
  <br>
 `)
    $('#car-message').append(carHTML)
  })
  $('#car-message').show()
}

const onViewOneCarSelectionSuccess = function (data) {
  successMessage('Here is your car preference!')
  $('#car-message2').html('')
  $('#car-message').html('')
  const carHTML = (`
      <p>ID: ${data.car.id}</p>
      <p>Make: ${data.car.make}</p>
      <p>Model: ${data.car.model}</p>
      <p>Year: ${data.car.year}</p>
      <p>MPG Min: ${data.car.mpg_min}</p>
      <p>Price Max: ${data.car.price_max}</p>
     <br>
    `)
  $('#car-message').append(carHTML)
  $('#car-message').show()
}

const onViewOneCarSelectionFailure = function (data) {
  failureMessage('Car preference retrieval failed! Make sure you are entering a valid ID!')
}

const onDeleteOneCarSelectionSuccess = function (data) {
  successMessage('Car preference deleted!')
  $('#car-message2').html('')
  $('#car-message').html('')
  $('#car-delete').html('')
}

const onDeleteOneCarSelectionFailure = function (data) {
  failureMessage('Please enter a valid car ID to delete!')
}

const onUpdateCarSelectionsSuccess = function (responseData) {
  successMessage('Car specs updated! Click "View all saved preferences" to see your updated list!')
  $('#car-message').hide()
  $('#car-message2').hide()
}

const onUpdateCarSelectionsFailure = function (responseData) {
  failureMessage('Car update failed!')
}

const onViewCarSelectionsFailure = function () {
  failureMessage('Car viewing failed!')
}

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
  onEnterSelectionsFailure,
  onViewSelectionsSuccess,
  onViewSelectionsFailure,
  onUpdateSelectionsSuccess,
  onUpdateSelectionsFailure,
  onViewOneSelectionSuccess,
  onViewOneSelectionFailure,
  onDeleteOneSelectionSuccess,
  onDeleteOneSelectionFailure,
  onEnterCarSelectionsSuccess,
  onEnterCarSelectionsFailure,
  onViewOneCarSelectionSuccess,
  onViewOneCarSelectionFailure,
  onDeleteOneCarSelectionSuccess,
  onDeleteOneCarSelectionFailure,
  onUpdateCarSelectionsSuccess,
  onUpdateCarSelectionsFailure,
  onViewCarSelectionsFailure,
  onViewCarSelectionsSuccess
}
