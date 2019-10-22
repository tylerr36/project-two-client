const config = require('./config')
const store = require('./store')

// AJAX call to signUp endpoint on server

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData,
    success: function () {
      $('#change-password').show()
      $('.changepassword').show()
    }
  })
}

// url: config.apiUrl + '/games',
// data: {}
// headers: {
//  Authorization: 'Token token=' + store.user.token
// },
// addPOST
// Listen for click on "New game" button and run event handler to call API

const changePassword = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    success: function () {
      $('.cell').hide()
      $('#createGame').hide()
      $('#change-password').hide()
      $('.changepassword').hide()
      $('#sign-in').show()
      $('.signin').show()
      $('#sign-up').show()
      $('.signup').show()
      $('#getstats').hide()
      $('#apartment-message').hide()
    }
  })
}

const enterSelections = function (formData) {
  // console.log(formData)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/apartments',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const viewSelections = function () {
  return $.ajax({
    method: 'GET',
    // if error, take out slash at end of next line
    url: config.apiUrl + '/apartments',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const viewOneSelection = function (formData) {
//  // console.log('this is api for viewOne ' + formData)
  return $.ajax({
    method: 'GET',
    // if error, take out slash at end of next line
    url: config.apiUrl + '/apartments/' + formData.apartment.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteOneSelection = function (formData) {
  // // console.log('this is api for viewOne ' + formData)
  return $.ajax({
    method: 'DELETE',
    // if error, take out slash at end of next line
    url: config.apiUrl + '/apartments/' + formData.apartment.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateSelections = function (formData) {
  // console.log(formData.apartment.id)
  return $.ajax({
    method: 'PATCH',
    // if error, take out slash at end of next line
    url: config.apiUrl + '/apartments/' + formData.apartment.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  enterSelections,
  viewSelections,
  updateSelections,
  viewOneSelection,
  deleteOneSelection
}
