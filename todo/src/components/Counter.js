import React, { useState, useEffect } from "react"

function Counter() {
	let [counter, setCounter] = useState(0)

	const increamentCounter = () => {
		setCounter(counter++)
	}
	return <div onClick={increamentCounter}>{counter}</div>
}

export default Counter
