import Card from '../Components/Card'

const HomePage = ({searchSubject}) => {
  
  return (
   
      <div className="container mx-auto px-4 py-6">
      <div className="home-container">
         {searchSubject.map(subject => (
            <Card
                key={subject.id}
                language={subject.language}
                description={subject.description}
                subject={subject.subject}
                color={subject.color}
                id={subject.id}

            />
         ))}
      </div>
      </div>
    
  )
}

export default HomePage


