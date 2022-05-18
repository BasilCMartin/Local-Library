
function findLength(array) {
  return array.length
}

function getTotalBooksCount(books) {
  return findLength(books)
}


function getTotalAccountsCount(accounts) {
return findLength(accounts)
}

function getBooksBorrowedCount(books) {
  let total = 0
  for (let i = 0; i < books.length; i++) {
    if (!books[i].borrows[0].returned) total +=1
  }
  return total
}


function getMostCommonGenres(books) {
  let countedGenres = {}
  books.forEach((book)=>{ 
    (countedGenres[book.genre]) ? countedGenres[book.genre] ++ : countedGenres[book.genre] = 1
  })
  let nameAndCount = Object.entries(countedGenres).map(([name, count])=> {return {name, count}})
  return nameAndCount.sort((genreA,genreB)=> genreB.count - genreA.count).slice(0,5)
}

function getMostPopularBooks(books) {
popular = books.map((book)=>({name:book.title, count:book.borrows.length}))
popular.sort((bookA,bookB)=> bookB.count-bookA.count)
return popular.slice(0,5)
}


function getMostPopularAuthors(books, authors) {
  let result = authors.reduce((authorArray, author)=>{ 
  authorInfo = {name: `${author.name.first} ${author.name.last}`, count: 0};
  books.forEach((book)=> {
    if (book.authorId === author.id) {
      authorInfo.count += book.borrows.length
    } 
  })
  authorArray.push((authorInfo))
  return authorArray;
},[])
return result.sort((authorA,authorB)=> authorB.count - authorA.count).slice(0,5)
}

//Below, I solved this without using reduce, but rewrote it to make use of the reduce function as I hadn't
// done so yet. leaving it here for my reference :)


/*function getMostPopularAuthors(books, authors) {
  let answerArr = []
 authors.forEach((author)=> { 
   let authorInfo = {
    name: `${author.name.first} ${author.name.last}`,
    count: 0
  };
books.forEach((book)=> {
  if (book.authorId === author.id) {
    authorInfo.count += book.borrows.length
  }
})
answerArr.push(authorInfo)})
return answerArr.sort((a,b)=> b.count - a.count).slice(0,5)
}*/

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
