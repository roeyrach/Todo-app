import React from "react"
import TodoList from "./components/TodoList"
import Counter from "./components/Counter"

const todosList = [
	// { content: "go to the gym", isComplete: false },
	// { content: "go to the mall", isComplete: false },
	// { content: "finish assignment", isComplete: false },
]

const App = () => {
	return (
		<>
			<TodoList todos={todosList}></TodoList>
		</>
	)
}

export default App
