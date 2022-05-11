import { 
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Formpage from "./pages/Formpage/Formpage";
import Successpage from './pages/Successpage/Successpage';

function App() {
  return (
  <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Formpage />} />
          <Route path='/success' exact element={<Successpage />} />
          <Route path="*" element={<Navigate to="/" replace />} />       
       </Routes>
  </BrowserRouter>    
  );
}

export default App;
