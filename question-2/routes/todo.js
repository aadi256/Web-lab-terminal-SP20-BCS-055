var express = require("express");
var router = express.Router();
var Todo = require("../models/todo");

/* GET home page. */
router.get("/", async function (req, res, next) {
	let todos = await Todo.find({});
	res.render("todo/list", { title: "Todo in DB", todos });
});
router.get("/add", async function (req, res, next) {
	res.render("todo/add");
});
router.post("/add", async function (req, res, next) {
	let todo = new Todo(req.body);
	await todo.save();
	res.redirect("/todo");
});
router.get("/delete/:id", async function (req, res, next) {
	let todo = await Todo.findByIdAndDelete(req.params.id);
	console.log(todo);
	res.redirect("/todo");
});
router.get("/edit/:id", async function (req, res, next) {
	let todo = await Todo.findById(req.params.id);
	res.render("todo/edit", { todo });
});
router.post("/edit/:id", async function (req, res, next) {
	let todo = await Todo.findById(req.params.id);
	todo.name = req.body.name;
	todo.content = req.body.content;
	todo.status = req.body.status;
	await todo.save();
	res.redirect("/todo");
});
module.exports = router;
