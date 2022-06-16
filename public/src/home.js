function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => book.borrows[0].returned === false).length;
}

function getMostCommonGenres(books) {
  const genres = books.map((book) => book.genre);
  const finArr = [];
  const genreObjs = [];
  for (let i = 0; i < genres.length; i++){
    const currGenre = genres[i];
    const currObj = genreObjs.find((genreObj) => genreObj.name === currGenre);
    if (currObj != undefined){
      currObj.count++;
    }
    else {
      genreObjs.push({"name": currGenre, "count": 1});
    }
  }
  genreObjs.sort((objA, objB) => objB.count - objA.count);
  for (let i = 0; i < 5; i++){
    if (genreObjs[i] == undefined) break;
    finArr.push(genreObjs[i]);
  }
  return finArr;
}

function getMostPopularBooks(books) {
  books.sort((bookA, bookB) => bookA.borrows.length > bookB.borrows.length ? -1 : 1);
  const finArr = [];
  for (let i = 0; i < 5; i++){
    const currBook = books[i];
    if (currBook == undefined) break;
    const listObj = {"name": currBook.title, "count": currBook.borrows.length};
    finArr.push(listObj);
  }
  return finArr;
}

function getMostPopularAuthors(books, authors) {
  const authorPop = [];
  const finArr = [];
  for (let i = 0; i < authors.length; i++){
    const currAuthor = authors[i];
    const currAuthBooks = books.filter((book) => book.authorId === currAuthor.id);
    const currAuthCount = currAuthBooks.reduce((totalCount, book) => totalCount + book.borrows.length, 0);
    authorPop.push({"name": `${currAuthor.name.first} ${currAuthor.name.last}`, "count": currAuthCount});
  }
  authorPop.sort((authA, authB) => authB.count - authA.count);
  for (let i = 0; i < 5; i++){
    if (authorPop[i] == undefined) break;
    finArr.push(authorPop[i]);
  }
  return finArr;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
