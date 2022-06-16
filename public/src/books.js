function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const finArr = [];
  const outBooks = books.filter((book) => book.borrows[0].returned === false);
  const inBooks = books.filter((book) => book.borrows[0].returned === true);
  finArr.push(outBooks);
  finArr.push(inBooks);
  return finArr;
}

function getBorrowersForBook(book, accounts) {
  const borrowers = book.borrows;
  const finArr = [];
  for (let i = 0; i < 10; i++){
    if (i > borrowers.length || borrowers[i] == undefined) break;
    const currBorrower = borrowers[i];
    const currAccount = accounts.find((account) => account.id === currBorrower.id);
    currAccount.returned = currBorrower.returned;
    finArr.push(currAccount);
  }
  return finArr;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
