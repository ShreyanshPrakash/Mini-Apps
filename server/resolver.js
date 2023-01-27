
const {books } = require("./mackData");



// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      books: async (parent, args, contextValue, info) => {
        console.log(parent);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        return data;
      },
    },
  };


  module.exports = {
    resolvers,
  }