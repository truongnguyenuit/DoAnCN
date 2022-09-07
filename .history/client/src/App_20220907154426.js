import { BrowserRouter, Route, Routes } from "react-router-dom";
import { configRouter } from './router/configRouter';
import NavbarComponent from './components/TopBarComponent';
import ProtectedRoute from "./router/protectedRouter";

function App() {


  return (
    <div>
      <BrowserRouter>
        <div className="fixed top-0 left-0 right-0 z-10">
          {/* <NavbarComponent /> */}
        </div>
        <div className="mt-[50px]"></div>
        <Routes>
          {configRouter.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                element={item.page}
              // <ProtectedRoute protect={item.private}>                
              // </ProtectedRoute>
              />
            );
          })}

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
