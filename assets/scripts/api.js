const config = require('./config')
const store = require('./store')

// AJAX call to signUp endpoint on server
const signUp = function (formData) {
  console.log('apiUrl is ', config.apiUrl)
  console.log('credentials in signUp ', formData)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

// AJAX call to signIn endpoint on server
const signIn = function (formData) {
  console.log('apiUrl is ', config.apiUrl)
  console.log('credentials in signIn ', formData)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

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
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
