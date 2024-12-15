import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import HomePage from "./Pages/HomePage"
import AnswerListPage from "./Pages/AnswerListPage"
import QuestionListPage from "./Pages/QuestionListPage"
import QuestOnlyPage from "./Pages/QuestOnlyPage"
import AnsOnly from "./Pages/AnsOnly"
import Footer from "./Components/Footer"
function App() {
  return (
     
     <BrowserRouter>
       <div className="min-h-screen flex flex-col">  {/* wrapper div */}
       <Header/>
        <main className="flex-grow bg-slate-100"> {/*main wrapper */}
        <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="questionshub" element={ <QuestOnlyPage/>  } />
            <Route path="answershub" element={ <AnsOnly/>  } />
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

//   return (
//     <BrowserRouter>
//       <div className="min-h-screen flex flex-col">  
//         <Header/>
//         <main className="flex-grow">  
//           <Routes>
//             <Route path="/" element={ <HomePage/> } />
//             <Route path="/questionshub/:sub" element={ <QuestionListPage/> } />
//             <Route path="/answershub/:sub" element={ <AnswerListPage/> } />
//           </Routes>
//         </main>
//         <Footer/>  {/* Add the Footer component */}
//       </div>
//     </BrowserRouter>
//   )
