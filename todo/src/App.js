import React, { useState } from "react"
import TodoList from "./components/TodoList"
import "./App.css"

const App = () => {
	const [darkModeEnabled, setDarkModeEnabled] = useState(false)

	const toggleDarkMode = () => {
		setDarkModeEnabled(!darkModeEnabled)
	}

	const className = darkModeEnabled ? "dark-mode" : "light-mode"

	return (
		<div
			className={className}
			style={{
				height: "100vh",
			}}
		>
			<div
				id="appRoot"
				style={{
					alignContent: "center",
					alignItems: "center",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<h1>TODO</h1>
				<button
					style={{
						backgroundColor: darkModeEnabled ? "#333333" : "#f1f1f1",
						color: darkModeEnabled ? "#f1f1f1" : "#333333",
						border: `1px solid ${darkModeEnabled ? "#f1f1f1" : "#333333"}`,
						borderRadius: "5px",
					}}
					onClick={toggleDarkMode}
				>
					Dark/Light
				</button>
				<div
					style={{
						padding: "15px",
						marginTop: "5vh",
						borderRadius: "10px",
						maxWidth: "60vw",
						backgroundColor: `${darkModeEnabled ? "#333333" : "#d8d8d8"}`,
					}}
				>
					<TodoList darkModeEnabled={darkModeEnabled}></TodoList>
				</div>
			</div>
		</div>
	)
}

export default App
