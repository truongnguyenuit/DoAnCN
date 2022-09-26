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
          {configRouter.map((item, index) => {
            if (item.admin === true)
              return (
                <Route
                  key={index}
                  path={item.path}
                  element={
                    <ProtectedRoute protect={item.private} admin={item.admin}>
                      <div className="fixed top-0 z-20">
                        <LeftBarComponent />
                      </div>
                      <div className="fixed top-0 left-[300px] right-0 z-10">
                        <TopBarComponent />
                      </div>
                      <div className="mt-[50px]"></div>
                      {item.page}
                    </ProtectedRoute>
                  }
                />
              );
              else {
                return (
                  <Route
                    key=
                  />
                )
              }
          } 
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
