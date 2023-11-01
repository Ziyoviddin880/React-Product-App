import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";

// Auth (Register and Login)
import Login from "./auth/Login";
import Register from "./auth/Register";

// Components
import Home from "./components/home/Home";
import RootLayout from "./components/RootLayout/RootLayout";
import Contact from "./components/contact/Contact";
import Category from "./components/category/Category";

// Fetch Hook
// import { useFetch } from "./hooks/useFetch/useFetch";

function App() {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  // axios
  //   .create({
  //     baseURL: "https://reqres.in/api",
  //   })
  //   .get("/register")
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // const [url, setUrl] = useState("https://dummyjson.com/products");
  // const { data } = useFetch(url);

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout token={token} />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="category" element={<Category />} />
        </Route>
        <Route>
          <Route path="register" element={<Register setToken={setToken} />} />
          <Route path="login" element={<Login setToken={setToken} />} />
        </Route>
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
