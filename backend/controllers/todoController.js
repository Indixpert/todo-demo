const Todo = require('../models/Todo');

// @desc    Get all todos
// @route   GET /api/todos
// @access  Public
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ date: -1 });
    res.json(todos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Create a todo
// @route   POST /api/todos
// @access  Public
exports.createTodo = async (req, res) => {
  try {
    const newTodo = new Todo({
      text: req.body.text,
    });

    const todo = await newTodo.save();
    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Update a todo
// @route   PUT /api/todos/:id
// @access  Public
exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }

    // If request has 'text', update text.
    if (req.body.text !== undefined) {
      todo.text = req.body.text;
    } else {
      // Original behavior: toggle completed status
      todo.completed = !todo.completed;
    }

    await todo.save();
    res.json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Delete a todo
// @route   DELETE /api/todos/:id
// @access  Public
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ msg: 'Todo not found' });
    }

    await todo.remove();

    res.json({ msg: 'Todo removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
