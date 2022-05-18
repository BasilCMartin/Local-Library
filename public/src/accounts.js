function findAccountById(accounts, id) {
let answer = accounts.find((guy)=> guy.id === id)
return answer
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA,accountB)=>
   accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1:-1)
return accounts
}


function getTotalNumberOfBorrows(account, books) {
let answer = 0
const id = account.id
books.forEach((book)=> book.borrows.forEach((borrow)=> {if (id===borrow.id) {answer++}}))
return answer
}


function getBooksPossessedByAccount(account, books, authors) {
  let ID = account.id
  let possessedBooks = books.filter((book)=> book.borrows[0].returned === false && book.borrows[0].id === ID)
  let answerArr = possessedBooks.map((info)=>({...info, author: authors.find((author)=> author.id === info.authorId)}))
  return answerArr
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
