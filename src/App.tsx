import { BrowserRouter as Router } from 'react-router-dom';

import { NavigationBar } from "./modules/Home/components/NavigationBar/NavigationBar";
import { HomeRoutes } from './modules/Home/routes';

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <HomeRoutes />
      </Router>
    </>
  );
}

export default App;
