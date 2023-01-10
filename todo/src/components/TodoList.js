import React, { useState } from "react"
import TodoItem from "./TodoItem"
import uuid from "react-uuid"
import "../App.css"

function TodoList(props) {
	const [task, setTask] = useState("Add a task")
	const [todos, setTodos] = useState(props.todos)
	const [counter, setCounter] = useState(0)
	const [filter, setFilter] = useState(" All")

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
	const clearCompleted = () => {
		const completedTasks = todos.filter((task) => !task.isComplete)
		setTodos(completedTasks)
		setCounter(completedTasks.length)
	}
	const checkBoxChange = (id) => {
		const index = todos.findIndex((item) => item.id === id)
		todos[index].isComplete = !todos[index].isComplete
		setTodos([...todos])
	}
	const showKindsOfLists = (event) => {
		const val = event.target.innerHTML
		if (val === " All") {
			setFilter(val)
		} else if (val === " Active") {
			setFilter(val)
		} else if (val === " Completed") {
			setFilter(val)
		}
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
					minWidth: "100%",
				}}
			>
				<form onSubmit={handleSubmit}>
					<button id="plus" sytle={{}} type="submit" value="+">
						+
					</button>
					<label>
						<input
							style={{
								minWidth: "95%",
								display: "relaive",
								backgroundColor: props.darkModeEnabled ? "#333333" : "#f1f1f1",
								color: props.darkModeEnabled ? "#f1f1f1" : "#333333",
								borderRadius: "10px",
							}}
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
					height: "100%",
					display: "relative",
				}}
			>
				{todos.map((todo, index) => {
					if (filter === " All") {
						return (
							<TodoItem
								darkModeEnabled={props.darkModeEnabled}
								index={index}
								key={todo.id}
								onClick={deleteTask}
								content={todo.content}
								cb={todo.isComplete}
								id={todo.id}
								onChange={checkBoxChange}
							></TodoItem>
						)
					} else if (filter === " Active") {
						if (todo.isComplete === false) {
							return (
								<TodoItem
									darkModeEnabled={props.darkModeEnabled}
									index={index}
									key={todo.id}
									onClick={deleteTask}
									content={todo.content}
									cb={todo.isComplete}
									id={todo.id}
									onChange={checkBoxChange}
								></TodoItem>
							)
						}
					} else if (filter === " Completed") {
						if (todo.isComplete === true) {
							return (
								<TodoItem
									darkModeEnabled={props.darkModeEnabled}
									index={index}
									key={todo.id}
									onClick={deleteTask}
									content={todo.content}
									cb={todo.isComplete}
									id={todo.id}
									onChange={checkBoxChange}
								></TodoItem>
							)
						}
					}
				})}
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						rowGap: "1vw",
						gap: "5vw",
						justifyContent: "center",
						border: `1px solid ${props.darkModeEnabled ? "#f1f1f1" : "#333333"}`,
						borderRadius: "5px",
						paddingRight: "5px",
						paddingLeft: "5px",
						position: "relative",
					}}
				>
					<label>Number of tasks: {counter} </label>
					<div
						style={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							padding: "1em",
						}}
					>
						<span onClick={showKindsOfLists}> All</span>
						<span onClick={showKindsOfLists}> Active</span>
						<span onClick={showKindsOfLists}> Completed</span>
					</div>
					<span
						style={{ marginLeft: "auto", hover: "blue" }}
						onClick={clearCompleted}
					>
						Clear completed
					</span>
				</div>
			</div>
		</div>
	)
}

export default TodoList
