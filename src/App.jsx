const Header = (props) => {
  return(
    <p>Course name: {props.course}</p>
  )
}

const Part = (props) => {
  return(
    <p>{props.part} {props.exercises}</p>
  )
}

const Total = (props) => {
  return (
    <p>Total exercises: {props.num1 + props.num2 + props.num3}</p>
  )
  
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <strong>
        <Header course = {course}/>
      </strong>
      <Part part={part1} exercises= {exercises1}/>
      <Part part={part2} exercises = {exercises2}/>
      <Part part={part3} exercises = {exercises3}/>
      <Total num1={exercises1} num2={exercises2} num3={exercises3}/>
    </div>
  )
}

export default App