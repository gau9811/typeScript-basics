// function showTodo(todo: {title: string; text: string}) {
//   console.log(todo.title + " : " + todo.text)
// }
function showTodo(Todo) {
    console.log(Todo.title + ":" + Todo.text);
}
var myTodo = { title: "Trash", text: "take out" };
showTodo(myTodo);
