const Header = (props) => {
  return(
    <p>Course name: {props.course}</p>
  )
}

const Content = (props) => {
  return(
    <div>
      <p>{props.part[0].name} {props.part[0].exercises}</p>
      <p>{props.part[1].name} {props.part[1].exercises}</p>
      <p>{props.part[2].name} {props.part[2].exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Total exercises: {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</p>
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

  return (
    <div>
      <strong>
        <Header course = {course}/>
      </strong>
      <Content part={parts}/>
      <Total part={parts}/>
    </div>
  )
}

export default App