import React, {useEffect, useState, Suspense} from 'react';
import '../assets/styles/App.css';
import { Switch } from "react-router-dom";
import { renderRoutes, routes } from "./routes";

function App() {
  const [renderedRoutes, setRenderedRoutes] = useState();

  useEffect(() => {
    let result = renderRoutes(routes);
    setRenderedRoutes(result);
  }, []);

  return (
    <div className="App">
        <Suspense fallback={() => <h1>Loading...</h1>}>
          <Switch>{renderedRoutes}</Switch>
        </Suspense>
    </div>
  );
}

export default App;
