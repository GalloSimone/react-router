import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./layout/LayoutDefault";



import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import IndexPosts from "./pages/posts/IndexPosts.jsx";

function App() {
  return(
    <BrowserRouter>
    <Routes>
    <Route Component={Layout}>
     <Route index Component={HomePage} />
     <Route path="/about" Component={AboutPage} />
     <Route path="/Post" Component={IndexPosts} />
     </Route>
    </Routes>
    </BrowserRouter>
  );

}

export default App
