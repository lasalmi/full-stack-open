const Header = (props) => {
	return (
		<div>
			<p>Course name is: {props.course}</p>
		</div>
	)
}
const Part = (props) => {
	return (
		<div>
			<p>{props.part} has {props.exercises} exercises.</p>
		</div>
	)
}
const Content = (props) => {
	let part1 = props.part[0]
	let part2 = props.part[1]
	let part3 = props.part[2]
	return (
		<div>
			<p>Course consists of: <br /></p>
			<Part part={part1.name} exercises={part1.exercises}/>
			<Part part={part2.name} exercises={part2.exercises}/>
			<Part part={part3.name} exercises={part3.exercises}/>
		</div>
	)
}
const Total = (props) => {
	let part1 = props.part[0]
	let part2 = props.part[1]
	let part3 = props.part[2]
	return (
		<div>
			<p>In total the course has {part1.exercises + part2.exercises + part3.exercises} exercises.</p>
		</div>
	)
}
const App = () => {
	const course = 'Half Stack application development'
	const parts = [
	  {
		name: 'Fundamentals of React',
		exercises: 10
	  },
	  {
		name: 'Using props to pass data',
		exercises: 7
	  },
	  {
		name: 'State of a component',
		exercises: 14
	  }
	]
	const[first, second, third] = parts
	return (
	  <div>
		<h1>{course}</h1>
		<p>
		  <Content part={parts}/>
		</p>
		<p><Total part={parts}/></p>
	  </div>
	)
  }
  
  export default App
