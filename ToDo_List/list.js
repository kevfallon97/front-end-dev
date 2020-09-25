var todos = ["Buy dog food"];

// avoid issues with prompt in chrome browser
window.setTimeout(function() {

	var input = prompt("What would you like to do?");

	while(input !== "quit"){
		if (input === "list"){
			console.log(todos);
		} else if (input === "new"){
			//ask for new todo
			var newTodo = prompt("Enter new todo");
			//add to todos array
			todos.push(newTodo);
		}
		var input = prompt("What would you like to do?");
	}
	console.log("OK, YOU QUIT THE APP")
	

}, 500);

