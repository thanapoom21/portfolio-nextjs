const Topic = ({ parts }) => <li>{`${parts.name} ${parts.exercises}`}</li>

const Course = ({ courses }) => {
  return (
    <div>
      <h1 className='text-2xl md:text-4xl font-bold tracking-tight my-2'>Web Development Curriculum</h1>
      {courses.map(({ name, parts }) => {
        return (
          <>
            <p className='text-xl md:text-2xl font-bold tracking-tight my-2'>
              {name}
            </p>
            <ul>
              {parts.map((part, idx) => <Topic key={idx} parts={part}></Topic>)}
            </ul>
          </>
        )
      })}
    </div>
  )
}

const CourseInfo = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />
}

export default CourseInfo
