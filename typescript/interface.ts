// function showTodo(todo: {title: string; text: string}) {
//   console.log(todo.title + " : " + todo.text)
// }

// let mytodo = {title: "Trash", Text: "take out"}

// showTodo(mytodo)

interface Todo {
  title: string
  text: string
}

function showTodo(Todo: Todo) {
  console.log(Todo.title + ":" + Todo.text)
}

let myTodo = {title: "Trash", text: "take out"}

showTodo(myTodo)
