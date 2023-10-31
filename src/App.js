import { useState } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch/useFetch";

function App() {
  const [url, setUrl] = useState("https://dummyjson.com/products");
  const { data } = useFetch(url);

  return <div className="App">{data && console.log(data)}</div>;
}

export default App;
