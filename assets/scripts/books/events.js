'use strict'

const ui = require('./ui.js')
const api = require('./api.js')

const onGetBooks = function (event) {
  event.preventDefault()
  console.log('inside onGetBooks')

  api.getAllGames()
    .then(ui.getAllBooksSuccess)
    .catch(ui.getAllBooksFailure)
}

const addHandlers = () => {
  $('#books-content').on('submit', onGetBooks)
}

module.exports = {
  addHandlers
}
