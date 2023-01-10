import React, { useState } from "react"

function TodoItem(props) {
	return (
		<div
			style={{
				display: "flex",
				border: `1px solid ${props.darkModeEnabled ? "#f1f1f1" : "#333333"}`,
				marginBottom: "1.5vh",
				borderRadius: "5px",
			}}
		>
			<label>
				<input
					style={{
						borderRadius: "5px",
					}}
					type="checkbox"
					defaultChecked={props.cb}
					onChange={() => {
						props.onChange(props.id)
					}}
				/>
			</label>
			<label
				style={{
					textDecoration: props.cb && "line-through",
					opacity: props.cb && "0.5",
				}}
			>
				{props.index + 1 + " " + props.content}
			</label>

			<button
				style={{
					marginLeft: "auto",
					backgroundColor: props.darkModeEnabled ? "#333333" : "#f1f1f1",
					color: props.darkModeEnabled ? "#f1f1f1" : "#333333",
					border: `1px solid ${props.darkModeEnabled ? "#f1f1f1" : "#333333"}`,
					borderRadius: "5px",
				}}
				onClick={() => {
					props.onClick(props.id)
				}}
			>
				x
			</button>
		</div>
	)
}

export default TodoItem
