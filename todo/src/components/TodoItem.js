import React, { useState } from "react"

function TodoItem(props) {
	const [checked, setChecked] = useState(false)
	return (
		<div>
			<label>
				<input
					type="checkbox"
					defaultChecked={checked}
					onChange={() => setChecked(!checked)}
				/>
			</label>
			{props.index + 1 + " " + props.content}
		</div>
	)
}

export default TodoItem
