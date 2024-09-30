import './App.css'
import {Routes, Route} from 'react-router-dom';
import Room from './screens/Room';
import LobbyScreen from './LobbyScreen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LobbyScreen/>}/>
        <Route path='/room/:roomID' element={<Room/>}/>
      </Routes>
    </div>
  )
}

export default App