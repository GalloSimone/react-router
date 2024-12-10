import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage"
import PostPage from "./pages/PostListPage"
function App() {
  return(
    <BrowserRouter>
    <Routes>
     <Route index Component={HomePage} />
     <Route path="/about" Component={AboutPage} />
     <Route path="/post" Component={PostPage} />
    </Routes>
    </BrowserRouter>
  );

}

export default App
