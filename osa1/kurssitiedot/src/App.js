const Header = (props) => {
	return (
		<div>
			<p>Course name is: {props.course}</p>
		</div>
	)
}
const Part = (props) => {
	console.log(props)
	return (
		<div>
			<p>{props.part} has {props.exercises} exercises.</p>
		</div>
	)
}
const Content = (props) => {
	return (
		<div>
			<p>Course consists of: <br /></p>
			<Part part={props.part1} exercises={props.exercises1}/>
			<Part part={props.part2} exercises={props.exercises2}/>
			<Part part={props.part3} exercises={props.exercises3}/>
		</div>
	)
}
const Total = (props) => {
	return (
		<div>
			<p>In total the course has {props.exercises1 + props.exercises2 + props.exercises3} exercises.</p>
		</div>
	)
}
const App = () => {
	const course = 'Half Stack application development'
	const part1 = {
	  name: 'Fundamentals of React',
	  exercises: 10
	}
	const part2 = {
	  name: 'Using props to pass data',
	  exercises: 7
	}
	const part3 = {
	  name: 'State of a component',
	  exercises: 14
	}
  
	return (
	  <div>
		<h1>{course}</h1>
		<p>
		  <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises}/>
		</p>
		<p><Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises}/></p>
	  </div>
	)
  }
  
  export default App
