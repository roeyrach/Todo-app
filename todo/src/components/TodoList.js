import React, { useState } from "react"
import TodoItem from "./TodoItem"
import uuid from "react-uuid"

function TodoList(props) {
	const [task, setTask] = useState("Add a task")
	const [todos, setTodos] = useState(props.todos)

	const handleChange = (event) => {
		setTask(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		const newTodo = { content: task, isComplete: false }
		setTodos([...todos, newTodo])
		setTask("Add a task")
	}

	return (
		//hi
		<div style={{ width: "55vw" }}>
			<div
				style={{
					marginBottom: "10px",
				}}
			>
				<form onSubmit={handleSubmit}>
					<input type="submit" value="+" />
					<label>
						<input
							type="text"
							value={task}
							onClick={() => setTask("")}
							onChange={handleChange}
						/>
					</label>
				</form>
			</div>
			<div
				style={{ border: "1px solid black", height: "100%", display: "relative" }}
			>
				{todos.map((todo, index) => (
					<TodoItem
						key={uuid()}
						onClick={handleSubmit}
						content={todo.content}
						index={index}
					></TodoItem>
				))}
			</div>
		</div>
	)
}

export default TodoList
