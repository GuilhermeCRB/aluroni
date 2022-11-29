import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Carte from 'pages/Carte';
import Menu from 'components/Menu';
import StandardPage from 'components/StandardPage';

export default function AppRouter() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<StandardPage />}>
          <Route index element={<Home />} />
          <Route path="/cardapio" element={<Carte />} />
        </Route>
      </Routes>
    </Router>
  );
}
