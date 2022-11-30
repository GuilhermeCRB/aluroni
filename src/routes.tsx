import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Carte from 'pages/Carte';
import Menu from 'components/Menu';
import StandardPage from 'components/StandardPage';
import About from 'pages/About';
import Footer from 'components/Footer';

export default function AppRouter() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<StandardPage />}>
          <Route index element={<Home />} />
          <Route path="/cardapio" element={<Carte />} />
          <Route path="/sobre" element={<About />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}
