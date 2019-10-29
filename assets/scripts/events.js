'use strict'

const getFormFields = require('../../lib/get-form-fields')
// not sure how to make this pull from our API...
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  // add a .hide somewhere in here
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onEnterSelections = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.enterSelections(formData)
    .then(ui.onEnterSelectionsSuccess)
    .catch(ui.onEnterSelectionsFailure)
}

const onViewSelections = function (event) {
  // console.log('Made it to events!')
  event.preventDefault()
  // const form = event.target
  // const formData = getFormFields(form)
  api.viewSelections()
    .then(ui.onViewSelectionsSuccess)
    .catch(ui.onViewSelectionsFailure)
}

const onViewOneSelection = function (event) {
  // // console.log('Made it to events for view one!')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.viewOneSelection(formData)
    .then(ui.onViewOneSelectionSuccess)
    .catch(ui.onViewOneSelectionFailure)
}

const onDeleteOneSelection = function (event) {
  // console.log('Made it to events for view one!')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.deleteOneSelection(formData)
    .then(ui.onDeleteOneSelectionSuccess)
    .catch(ui.onDeleteOneSelectionFailure)
}

const onUpdateSelections = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateSelections(formData)
    .then(ui.onUpdateSelectionsSuccess)
    .catch(ui.onUpdateSelectionsFailure)
}

const onEnterCarSelections = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.enterCarSelections(formData)
    .then(ui.onEnterCarSelectionsSuccess)
    .catch(ui.onEnterCarSelectionsFailure)
}

const onViewCarSelections = function (event) {
  // console.log('Made it to events!')
  event.preventDefault()
  // const form = event.target
  // const formData = getFormFields(form)
  api.viewCarSelections()
    .then(ui.onViewCarSelectionsSuccess)
    .catch(ui.onViewCarSelectionsFailure)
}

const onViewOneCarSelection = function (event) {
  // // console.log('Made it to events for view one!')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.viewOneSelection(formData)
    .then(ui.onViewOneCarSelectionSuccess)
    .catch(ui.onViewOneCarSelectionFailure)
}

const onDeleteOneCarSelection = function (event) {
  // console.log('Made it to events for view one!')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.deleteOneCarSelection(formData)
    .then(ui.onDeleteOneCarSelectionSuccess)
    .catch(ui.onDeleteOneCarSelectionFailure)
}

const onUpdateCarSelections = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateSelections(formData)
    .then(ui.onUpdateCarSelectionsSuccess)
    .catch(ui.onUpdateCarSelectionsFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onEnterSelections,
  onViewSelections,
  onUpdateSelections,
  onViewOneSelection,
  onDeleteOneSelection,
  onEnterCarSelections,
  onViewCarSelections,
  onViewOneCarSelection,
  onDeleteOneCarSelection,
  onUpdateCarSelections
  // onClick
}
