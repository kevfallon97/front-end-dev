var todos = ["Buy dog food"];

// avoid issues with prompt in chrome browser
window.setTimeout(function() {

	var input = prompt("What would you like to do?");

	while(input !== "quit"){
		// handle input
		if (input === "list"){
			listTodos();
		} else if (input === "new"){
			addTodo();
		} else if (input === "delete"){
			deleteTodo();
		}
		var input = prompt("What would you like to do?");
	}
	console.log("OK, YOU QUIT THE APP")
	

}, 500);

function listTodos(){
	console.log("*******");
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("*******");
}

function addTodo(){
	//ask for new todo
	var newTodo = prompt("Enter new todo");
	//add to todos array
	todos.push(newTodo);
}

function deleteTodo(){
	var index = prompt("Enter index of todo to delete");
	todos.splice(index, 1);
}