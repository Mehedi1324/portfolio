import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import FrontEnd from './Component/FrontEnd';
import BackEnd from './Component/BackEnd';
import Others from './Component/Others';
import Error from './Component/Error';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="fontend" element={<FrontEnd />} />
            <Route path="backend" element={<BackEnd />} />
            <Route path="other" element={<Others />} />
          </Route>
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
