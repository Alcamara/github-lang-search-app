import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchPage from './components/Search/SearchPage'
import SearchDetailPage from './components/SearchDetail/SearchDetailPage'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<SearchPage/>}/>
          <Route path='/detail' element={<SearchDetailPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
