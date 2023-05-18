import { useState } from "react";
import Home from "./page/Home";
import Prectice from "./components/Practice";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Prectice /> */}
      <Home />
    </div>
  );
}

export default App;
