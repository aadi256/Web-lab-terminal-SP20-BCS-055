var mongoose = require("mongoose");

var todoSchema = mongoose.Schema({
	name: String,
	content: String,
	status: String,
});

const Todo = mongoose.model("todo", todoSchema);
module.exports = Todo;
