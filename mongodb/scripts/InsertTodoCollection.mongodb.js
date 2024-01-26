// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("todo-tdd");

// Create a new document in the collection.
db.getCollection("todos").insertOne({
  title: "Todo 1",
  done: false,
});

db.getCollection("todos").insertOne({
  title: "Todo 2",
  done: false,
});

db.getCollection("todos").insertOne({
  title: "Todo 3",
  done: false,
});

db.getCollection("todos").insertOne({
  title: "Todo 4",
  done: false,
});

db.getCollection("todos").insertOne({
  title: "Todo 5",
  done: false,
});
