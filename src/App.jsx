import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./layout/LayoutDefault";



import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage"
import PostPage from "./pages/PostListPage"
function App() {
  return(
    <BrowserRouter>
    <Routes>
    <Route Component={Layout}>
     <Route index Component={HomePage} />
     <Route path="/about" Component={AboutPage} />
     <Route path="/Post" Component={PostPage} />
     </Route>
    </Routes>
    </BrowserRouter>
  );

}

export default App
