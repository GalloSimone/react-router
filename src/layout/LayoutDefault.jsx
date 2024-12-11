import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"
export default function layout(){
    return(
    <>
    <header>
      <Navbar/>
    </header>

    <main>
        <Outlet/>
    </main>

    <footer>
        footer
    </footer>

    </>
    )
}