import React, { useState } from "react"
import TodoItem from "./TodoItem"
import uuid from "react-uuid"

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
				}}
			>
				<form onSubmit={handleSubmit}>
					<input type="submit" value="+" />
					<label>
						<input style ={{width:"51.5vw"}}
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
				{todos.map((todo, index) => {
					if (filter === " All") {
						return (<TodoItem
							index={index}
							key={todo.id}
							onClick={deleteTask}
							content={todo.content}
							cb={todo.isComplete}
							id={todo.id}
							onChange={checkBoxChange}
						></TodoItem>)
					} else if (filter === " Active") {
						if (todo.isComplete === false) {
							return (<TodoItem
								index={index}
								key={todo.id}
								onClick={deleteTask}
								content={todo.content}
								cb={todo.isComplete}
								id={todo.id}
								onChange={checkBoxChange}
							></TodoItem>)
						}
					} else if (filter === " Completed") {
						if (todo.isComplete === true) {
							return (<TodoItem
								index={index}
								key={todo.id}
								onClick={deleteTask}
								content={todo.content}
								cb={todo.isComplete}
								id={todo.id}
								onChange={checkBoxChange}
							></TodoItem>)
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
					}}
				>
					<span>Number of tasks: {counter} </span>
					<div style={{}}>
						<span onClick={showKindsOfLists}> All</span>
						<span onClick={showKindsOfLists}> Active</span>
						<span onClick={showKindsOfLists}> Completed</span>
					</div>
					<span style={{ marginLeft: "auto" }} onClick={clearCompleted}>
						Clear completed
					</span>
				</div>
			</div>
		</div>
	)
}

export default TodoList
