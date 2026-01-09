import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import EnglishLearningAdmin from './pages/EnglishLearningAdmin';

const App = () => {
  return (
    <Router>
      <div className='min-h-screen'>
        <Routes>
          <Route path='/' element={<Navigate to='/english-admin' />}></Route>
          <Route path='/english-admin' element={<EnglishLearningAdmin />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
