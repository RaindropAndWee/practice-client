'use strict'

const ui = require('./ui.js')
const api = require('./api.js')

const onGetBooks = function (event) {
  event.preventDefault()

  api.indexBooks()
    .then(ui.getAllBooksSuccess)
    .catch(ui.getAllBooksFailure)
}

const onClearBooks = (event) => {
  event.preventDefault()
  ui.clearBooks()
}

const addHandlers = () => {
  $('#books-get-button').on('click', onGetBooks)
  $('#clearBooksButton').on('click', onClearBooks)
}

module.exports = {
  addHandlers
}
