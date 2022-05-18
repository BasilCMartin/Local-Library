
function findAuthorById(authors, id) {
  let answer = authors.find((author)=> author.id === id)
  return answer
}

function findBookById(books, id) {
  let found = books.find((book)=> book.id === id)
  return found
}




function partitionBooksByBorrowedStatus(books) {
  const returnedArr = []
  const checkedOutArr = []
  for (let i = 0; i <books.length; i ++) {
    if (books[i].borrows[0].returned) {
      returnedArr.push(books[i])
    } else {checkedOutArr.push(books[i])}
  }
  let result = [checkedOutArr, returnedArr]
  return result
}



function getBorrowersForBook(book, accounts) {
  let answer = book.borrows.map((borrow)=> {
  let currentAccount = accounts.find((account)=> account.id === borrow.id)
return {...currentAccount, ...borrow}})
return answer.slice(0, 10)
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
