import PageRouter from "./components/router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <PageRouter />
      </>
    </BrowserRouter>
  );
}

export default App;
