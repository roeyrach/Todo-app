import React, { useState } from "react"

function TodoItem(props) {
	const [checked, setChecked] = useState(false)
	return (
		<div style={{ display: "flex" }}>
			<label>
				<input
					style={{ borderRadius: "5px" }}
					type="checkbox"
					defaultChecked={checked}
					onChange={() => setChecked(!checked)}
				/>
			</label>
			{props.index + 1 + " " + props.content}
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
