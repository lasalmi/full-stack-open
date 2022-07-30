import { useState } from 'react'

const Header = ({text}) => (<h1>{text}</h1>)

const StatisticsLine = (props) => {
	if (props.text === 'positive') {
		return (
			<tr>
			<td>{props.text}</td><td>{props.value} %</td>
			</tr>
		)
	}
	return (
		<tr>
		<td>{props.text}</td><td>{props.value}</td>
		</tr>
	)
}
const Statistics = (props) => {
	<Header text='Statistics'/>
	if (props.total === 0) {
		return (<p>No feedback given</p>)
	}
	return (
		<table>
			<tbody>
			<StatisticsLine text="good" value={props.good}/>
			<StatisticsLine text="neutral" value={props.neutral}/>
			<StatisticsLine text="bad" value={props.bad}/>
			<StatisticsLine text="average" value={(props.good - props.bad) / props.total}/>
			<StatisticsLine text="positive" value={props.good / props.total * 100}/>
			</tbody>
		</table>
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
				<Statistics good={good} bad={bad} neutral={neutral} total={total}/>
			</div>
		</div>
	)
  }
export default App