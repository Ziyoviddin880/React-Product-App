import { useEffect } from "react";

import "./App.css";

function App() {
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((response) => console.log(response));
  }, []);

  return <div className="App"></div>;
}

export default App;
