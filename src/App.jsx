import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./layout/LayoutDefault";



import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ShowPosts from './pages/posts/ShowPosts';
import IndexPosts from './pages/posts/IndexPosts';
function App() {
  return(
    <BrowserRouter>
    <Routes>
    <Route Component={Layout}>
     <Route index Component={HomePage} />
     <Route path="/about" Component={AboutPage} />
     <Route path="/posts" Component={IndexPosts } />
        <Route path="/posts/:id" Component={ShowPosts} />
     </Route>
    </Routes>
    </BrowserRouter>
  );

}

export default App
