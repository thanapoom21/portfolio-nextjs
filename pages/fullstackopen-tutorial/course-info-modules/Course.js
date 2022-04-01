import Topic from "./Topic"
import TotalOfExercises from "./TotalOfExercises"

const Course = ({ courses }) => {
  return (
    <div>
      <h1 className='text-2xl md:text-4xl font-bold tracking-tight my-2'>Web Development Curriculum</h1>
      {courses.map(({ name, parts }, idx) => {
        const totalOfExercises = parts.map(part => part.exercises).reduce((a, c) => a + c)

        return (
          <div key={idx}>
            <p className='text-xl md:text-2xl font-bold tracking-tight my-2'>
              {name}
            </p>
            <ul>
              {parts.map((part, idx) => <Topic key={idx} parts={part} />)}
            </ul>
            <TotalOfExercises totalOfExercises={totalOfExercises} />
          </div>
        )
      })}
    </div>
  )
}

export default Course