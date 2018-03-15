'use strict'

const config = require('../config.js')

const indexBooks = function () {
  return $.ajax({
    url: 'https://wdi-library.herokuapp.com/books',
    method: 'GET'
  })
}

const getAllBooks = function () {
  return $.ajax({
    url: 'https://wdi-library.herokuapp.com/books',
    method: 'GET',
    headers: {
      contentType: 'application/json'
    }
  })
}

module.exports = {
  indexBooks,
  getAllBooks
}
