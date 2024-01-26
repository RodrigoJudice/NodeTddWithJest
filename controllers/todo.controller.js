const TodoModel = require("../model/todo.model");
exports.createTodo = async (req, res, next) => {
  const createModel = await TodoModel.create(req.body);
  res.status(201).json(createModel);
};
