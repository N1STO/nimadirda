import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'

import Case from './router/Cases/Case';
import Home from './router/home/Home'
import Games from './router/games/Games'
import Services from './router/services/Services'
import Support from './router/support/Support'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/case' element={<Case/>}/>
        <Route path='/games' element={<Games/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
    </div>
  );
}

export default App;
