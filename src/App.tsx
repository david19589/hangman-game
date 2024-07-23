import PageRouter from "./components/router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <PageRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
