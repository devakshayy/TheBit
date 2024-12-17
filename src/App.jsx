import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import HomePage from "./Pages/HomePage"
import AnswerListPage from "./Pages/AnswerListPage"
import QuestionListPage from "./Pages/QuestionListPage"
import QuestOnlyPage from "./Pages/QuestOnlyPage"
import AnsOnlyPage from "./Pages/AnsOnlyPage"
import Footer from "./Components/Footer"
import { useState } from "react"
import { subjects } from "./data/subjects"
import NotFoundPage from "./Pages/NotfoundPage"

function App() {
   
  const [search, setSearch] = useState("");

  const getFilteredSubjects = () => {
    if (!search) return subjects;
    
    return subjects.filter(
      (sub) =>
        sub.subject.toLowerCase().includes(search.toLowerCase()) ||
        sub.description.toLowerCase().includes(search.toLowerCase()) ||
        (Number(sub.id) + 1).toString().includes(search)
    );
  };
  
  const filteredSubjects = getFilteredSubjects();

  return (
     
     <BrowserRouter>
       <div className="min-h-screen flex flex-col">  {/* wrapper div */}
       <Header search={search} setSearch={setSearch} />
        <main className="flex-grow bg-slate-100"> {/*main wrapper */}
        <Routes>
            <Route path="/" element={ <HomePage searchSubject={filteredSubjects} /> } />
            <Route path="/questionshub" element={ <QuestOnlyPage/> } />
            <Route path="/answershub" element={ <AnsOnlyPage/>  } />
            <Route path="/questionshub/:sub" element={ <QuestionListPage/> }  caseSensitive={false} />
            <Route path="/answershub/:sub" element={ <AnswerListPage/> }  caseSensitive={false} />
            <Route path="*" element={ <NotFoundPage/> } />
        </Routes>
        </main>
        <Footer/>
       </div>
     </BrowserRouter>
  )
}

export default App

