import React from 'react'
import Header from '../Components/Header'
import Card from '../Components/Card'

const subjects = [
  {
    id: 0,
    language: "Malayalam",
    subject: "English",
    description: "Previous years English question papers and solved answers.",
    color: '#EA7562'
  },
  {
    id: 1,
    language: "Malayalam",
    subject: "Maths",
    description: "Previous years Maths question papers and solved answers.",
    color: '#A09EC5'
  },
  {
    id: 2,
    language: "Malayalam",
    subject: "Social",
    description: "Previous years Social Science question papers and solved answers.",
    color: '#9ABDB9'  
  },
  {
    id: 3,
    language: "Malayalam",
    subject: "Biology",
    description: "Previous years Biology question papers and solved answers.",
    color: '#887BAF'
  },
  {
    id: 4,
    language: "Malayalam",
    subject: "Chemistry",
    description: "Previous years Chemistry question papers and solved answers.",
    color: '#887BAF'
  },
  {
    id: 5,
    language: "Malayalam",
    subject: "Physics",
    description: "Previous years Physics question papers and solved answers.",
    color: '#453765'
  },
  {
    id: 6,
    language: "Malayalam",
    subject: "Malayalam",
    description: "Previous years Malayalam question papers and solved answers.",
    color: '#A5B599'
  },
];

const HomePage = () => {
  return (
    <>
      <Header/>
      <div className=' grid gap-4 lg:gap-10  grid-cols-2 md:grid-cols-4 lg:grid-cols-5 py-4 px-2 md:px-[100px] lg:px-20'>
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
    </>
  )
}

export default HomePage
