import React, { useState } from "react"
import TodoItem from "./TodoItem"
import uuid from "react-uuid"

function TodoList(props) {
	const [task, setTask] = useState("Add a task")
	const [todos, setTodos] = useState(props.todos)
	const [counter, setCounter] = useState(0)
	const handleChange = (event) => {
		setTask(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		if (!(task === "Add a task" || task === "")) {
			const newTodo = { content: task, isComplete: false, id: uuid() }
			setTodos([...todos, newTodo])
			setCounter(counter + 1)
		}
		setTask("")
	}
	const deleteTask = (id) => {
		const index = todos.findIndex((item) => item.id === id)

		if (index !== -1) {
			todos.splice(index, 1)
		}
		setTodos([...todos])
		setCounter(counter - 1)
	}
	return (
		<div
			style={{
				width: "55vw",
			}}
		>
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
				style={{
					border: "1px solid black",
					height: "100%",
					display: "relative",
				}}
			>
				{todos.map((todo, index) => (
					<TodoItem
						index={index}
						key={todo.id}
						onClick={deleteTask}
						content={todo.content}
						id={todo.id}
					></TodoItem>
				))}
				<label>Number of tasks: {counter}</label>
			</div>
		</div>
	)
}

export default TodoList
