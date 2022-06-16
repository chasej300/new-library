function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  return books.filter((book) => book.borrows.some((borrow) => borrow.id === account.id)).length;
}

function getBooksPossessedByAccount(account, books, authors) {
  const checkedOutBooks = books.filter((book) => book.borrows.some((borrow) => (borrow.id === account.id && borrow.returned === false)));
  let finArr = [];
  for (let i = 0; i < checkedOutBooks.length; i++){
    let currBook = checkedOutBooks[i];
    const content = authors.find((author) => author.id === currBook.authorId);
    currBook.author = content;
    finArr[i] = currBook;
  }
  return finArr;
}



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
