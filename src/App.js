import Labs from "./Labs";
import Kanbas from ".//Kanbas";
import HelloWorld from "./Labs/a3/HelloWorld";
import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      {/* <Link to="/Hello">Hello World</Link>
      <br />
      <Link to="/Labs">Labs</Link>
      <br />
      <Link to="/Kanbas">Kanbas</Link> */}
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Kanbas"/>}/>
          <Route path="/Hello" element={<HelloWorld />}/>
          <Route path="/Labs/*" element={<Labs />}/>
          <Route path="/Kanbas/*" element={<Kanbas />}/>
          {/* <Route path ="/Lecture" element = {<StateManagement/>}/> */}
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;
