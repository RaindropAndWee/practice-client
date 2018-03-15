'use strict'

const ui = require('./ui.js')
const api = require('./api.js')

const onGetBooks = function (event) {
  event.preventDefault()

  api.indexBooks()
    .then(ui.getAllBooksSuccess)
    .catch(ui.getAllBooksFailure)
}

const addHandlers = () => {
  $('#books-get-button').on('click', onGetBooks)
}

module.exports = {
  addHandlers
}
