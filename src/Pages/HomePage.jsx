import React from 'react'
import Card from '../Components/Card'
import { subjects } from '../data/subjects'

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
         {subjects.map(subject => (
            <Card
                key={subject.id}
                language={subject.language}
                description={subject.description}
                subject={subject.subject}
                color={subject.color}
            />
         ))}
      </div>
      </div>
    </>
  )
}

export default HomePage


{/* <div className=' grid items-center gap-4 lg:gap-10  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4 sm:py-2 md:px-[100px] lg:px-20'> */}