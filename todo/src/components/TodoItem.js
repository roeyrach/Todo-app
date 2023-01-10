import React, { useState } from "react"

function TodoItem(props) {
	const [checked, setChecked] = useState(false)
	return (
		<div style={{ display: "flex" }}>
			<label>
				<input
					style={{ borderRadius: "5px" }}
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
				style={{ marginLeft: "auto" }}
				onClick={() => {
					props.onClick(props.id)
				}}
			>
				Delete
			</button>
		</div>
	)
}

export default TodoItem
