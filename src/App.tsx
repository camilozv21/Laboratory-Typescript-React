import { BrowserRouter as Router } from 'react-router-dom';

import { NavigationBar } from "./common/components/NavigationBar/NavigationBar";
import { HomeRoutes } from './routes';

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
