import React from "react"
import TodoList from "./components/TodoList"

const todosList = []

const App = () => {
	return (
		<>
			<div
				id="appRoot"
				style={{
					alignContent: "center",
					alignItems: "center",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<TodoList todos={todosList}></TodoList>
			</div>
		</>
	)
}

export default App
