import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';

const App=()=> {
  const pageSize=5;
 
  const [progress, setProgress] = useState(0)
  
 
    return (
      <div>

        <Router>

          <Navbar></Navbar>
          <LoadingBar
          height={3}
        color='#f11946'
        progress={progress}
       
      />
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress}  pageSize={6} country="us" category="general"></News>}></Route>
            <Route exact path='/general' element={<News setProgress={setProgress}  pageSize={6} country="us" category="general"></News>}></Route>

            <Route exact path='/business' element={<News setProgress={setProgress}  pageSize={6} country="us" category="business"></News>}></Route>
            <Route exact path='/sports' element={<News setProgress={setProgress}  pageSize={6} country="us" category="sports"></News>}></Route>
            <Route exact path='/science' element={<News setProgress={setProgress}  pageSize={6} country="us" category="science"></News>}></Route>
            <Route exact path='/entertainment' element={<News setProgress={setProgress}  pageSize={6} country="us" category="entertainment"></News>}></Route>
            <Route exact path='/technology' element={<News setProgress={setProgress}  pageSize={6} country="us" category="technology"></News>}></Route>
            <Route exact path='/health' element={<News setProgress={setProgress}  pageSize={6} country="us" category="health"></News>}></Route>


          </Routes>




        </Router>

      </div>
    )
  }
export default App;


