'use strict'

const showAllBooksTemplate = require('../templates/books-listing.handlebars')

const getAllBooksSuccess = function (data) {
  console.log('data is ', data)
  const showAllBooksHtml = showAllBooksTemplate({ books: data.books })
  $('#books-content').html(showAllBooksHtml)
  $('#account-message').text('Books retrieved!')
  $('#account-message').css('background-color', '#5cb85c')
}

const getAllBooksFailure = function (error) {
  $('#account-message').text('Error on getting books!')
  $('#account-message').css('background-color', '#d9534f')
  console.log(error)
}

module.exports = {
  getAllBooksSuccess,
  getAllBooksFailure
}
