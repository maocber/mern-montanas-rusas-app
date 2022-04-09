import './App.css'
import IndexPage from './indexPage/indexPage';
import CoastersPage from './pages/CoasterPage/CostersPage';

import {Routes, Route} from 'react-router-dom'
import CoasterDetails from './pages/CoasterDetails/CoasterDetails';

function App() {
  return (
    <div className='container'>
      <h1>Creando en app</h1>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/galeria' element={<CoastersPage />} />
        <Route path='/detalles/:coaster_id' element={<CoasterDetails />} />
      </Routes>
    </div>
  );
}

export default App;
