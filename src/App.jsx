import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
import Header from "./Components/Header"
import HomePage from "./Pages/HomePage"
import AnswerListPage from "./Pages/AnswerListPage"
import QuestionListPage from "./Pages/QuestionListPage"
import QuestOnlyPage from "./Pages/QuestOnlyPage"
import AnsOnlyPage from "./Pages/AnsOnlyPage"
import Footer from "./Components/Footer"
import { useState } from "react"
import { subjects } from "./data/subjects"

function App() {

  let filteredSubjects= [];

  const [search, setSearch] = useState("");
  
  if (search) {
    filteredSubjects = [
      ...subjects.filter(
          (sub) => 
            sub.subject.toLowerCase().includes(search.toLocaleLowerCase()) ||
            sub.description.toLowerCase().includes(search.toLocaleLowerCase()) ||
            (Number(sub.id)+1).toString().includes(search)
          ),
    ];
  } else {
    filteredSubjects = [...subjects];
  }  

  return (
     
     <BrowserRouter>
       <div className="min-h-screen flex flex-col">  {/* wrapper div */}
       <Header search={search} setSearch={setSearch} />
        <main className="flex-grow bg-slate-100"> {/*main wrapper */}
        <Routes>
            <Route path="/" element={ <HomePage searchSubject={filteredSubjects} /> } />
            <Route path="questionshub" element={ <QuestOnlyPage/>  } />
            <Route path="answershub" element={ <AnsOnlyPage/>  } />
            <Route path="/questionshub/:sub" element={ <QuestionListPage/> } />
            <Route path="/answershub/:sub" element={ <AnswerListPage/> } />
        </Routes>
        </main>
        <Footer/>
       </div>
     </BrowserRouter>
  )
}

export default App

