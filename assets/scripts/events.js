'use strict'

const ui = require('./ui.js')
const api = require('./api.js')

onGetBooks = function (event) {
  event.preventDefault()
  console.log('inside onGetBooks')

  api.getBooks

}

const addHandlers = () => {
  $('#books-content').on('submit', onGetAllGames)

}

module.exports = {
  addHandlers
}
