const Header = (props) => {
	return (
		<div>
			<p>Course name is: {props.course.name}</p>
		</div>
	)
}
const Part = (props) => {
	return (
		<>
			<p>{props.part} has {props.exercises} exercises.</p>
		</>
	)
}
const Content = (props) => {
	let part1 = props.course.parts[0]
	let part2 = props.course.parts[1]
	let part3 = props.course.parts[2]
	return (
		<>
			<Part part={part1.name} exercises={part1.exercises}/>
			<Part part={part2.name} exercises={part2.exercises}/>
			<Part part={part3.name} exercises={part3.exercises}/>
		</>
	)
}
const Total = (props) => {
	let part1 = props.course.parts[0]
	let part2 = props.course.parts[1]
	let part3 = props.course.parts[2]
	return (
		<>
			<p>In total the course has {part1.exercises + part2.exercises + part3.exercises} exercises.</p>
		</>
	)
}
const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
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
	  }
	return (
	  <div>
		<h1>{course.name}</h1>
		  <Content course={course}/>
		  <Total course={course}/>
	  </div>
	)
  }
  
  export default App
