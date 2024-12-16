import Card from '../Components/Card'
import { subjects } from '../data/subjects'

const HomePage = ({searchSubject}) => {
  
  return (
   
      <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
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


