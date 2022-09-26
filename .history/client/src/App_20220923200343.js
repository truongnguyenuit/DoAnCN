import { BrowserRouter, Route, Routes } from "react-router-dom";
import { configRouter } from './router/configRouter';

import TopBarComponent from "./components/TopBarComponent";
import LeftBarComponent from "./components/LeftBarComponent";
import ProtectedRoute from "./router/protectedRouter";

function App() {
  return (
    <div>
    
      <BrowserRouter>
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
