import { useState } from 'react'

	
// const Button = ({handleClick, text}) => (
// 	<button onClick={handleClick}> 
// 	{text} 
// 	</button>
// )

// const History = (props) => {
// 	if (props.allClicks.length === 0) {
// 		return (
// 			<div>
// 			The App is used by pressing the buttons
// 			</div>
// 		)
// 	}
// 	return (
// 		<div>
// 			Button press history: {props.allClicks.join(' ')}
// 		</div>
// 	)
// }

// const App = () => {
// 	const [left, setLeft] = useState(0)
// 	const [right, setRight] = useState(0)
// 	const [allClicks, setAll] = useState([])

// 	const handleLeftClick = () => {
// 		setAll(allClicks.concat('L'))
// 		setLeft(left + 1)
// 	}
// 	const handleRightClick = () => {
// 		setAll(allClicks.concat('R'))
// 		setRight(right + 1)
// 	}
// 	return (
// 		<div>
// 			<div>
// 				{left}
// 				<Button handleClick={handleLeftClick} text='Left'/>
// 				<Button handleClick={handleRightClick} text='Right' />
// 				{right}
// 				<History allClicks={allClicks}/>
// 			</div>
// 		</div>
// 	)
// 	}

const Header = ({text}) => (<h1>{text}</h1>)

const Average = ({good, bad, neutral, total}) => {
	if (total === 0) {
		return (<p>Average: 0</p>)
	}
	return (
		<p>Average: {(good * 1 + bad * -1) / total}</p>
	)
}

const Positive = ({good, total}) => {
	return (
		<p>Positive: {good / total * 100}%</p>
	)
}
const Display = (props) => {
	return (
		<p>Good: {props.good} Neutral: {props.neutral} Bad: {props.bad} Total: {props.total}</p>
	)
}
const Button = ({handleClick, text}) => (
	<button onClick={handleClick}> 
	{text} 
	</button>
)
const App = (props) => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const [total, setTotal] = useState(0)

	const handleGoodClick = () => {
			setGood(good + 1)
			setTotal(total + 1)
	}
	const handleNeutralClick = () => {
			setNeutral(neutral + 1)
			setTotal(total + 1)
	}
	const handleBadClick = () => {
			setBad(bad + 1)
			setTotal(total + 1)
	}
	return (
		<div>
			<div>
				<Header text='Give Feedback' />
				<Button handleClick={handleGoodClick} text={'good'}/>
				<Button handleClick={handleNeutralClick} text={'neutral'}/>
				<Button handleClick={handleBadClick} text={'bad'}/>
				<Header text='Statistics' />
				<Display good={good} bad={bad} neutral={neutral} total={total}/>
				<Average good={good} bad={bad} neutral={neutral} total={total}/>
				<Positive good={good} total={total}/>
			</div>
		</div>
	)
  }
export default App