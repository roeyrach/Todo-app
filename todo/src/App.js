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
				<div style={{padding: "15px",marginTop:"5vh", border: "1px solid black", borderRadius: "10px"}}>
					<TodoList todos={todosList}></TodoList>
				</div>
				
			</div>
		</>
	)
}

export default App
