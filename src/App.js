import Header from './components/Header'
import Profile from './Pages/Profile'
import Home from './Pages/Home'
import Attributions from './Pages/Attributions'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App(){
  return (
  <Router>
    <Header/>
      <div>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/profile'element={<Profile/>}/>
          <Route path='/attributions'element={<Attributions/>}/>
        </Routes>
      </div>
  </Router>
  )
}

export default App;