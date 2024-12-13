import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import HomePage from "./Pages/HomePage"
import AnswerListPage from "./Pages/AnswerListPage"
import QuestionListPage from "./Pages/QuestionListPage"
function App() {
  return (
     <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={ <HomePage/> } />
            <Route path="/questionshub/:sub" element={ <QuestionListPage/> } />
            <Route path="/answershub/:sub" element={ <AnswerListPage/> } />
        </Routes>
     </BrowserRouter>
  )
}

export default App
