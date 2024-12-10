import { Outlet } from "react-router-dom";

export default function layout(){
    return(
    <>
    <header>Navlink</header>

    <main>
        <Outlet/>
    </main>

    <footer>
        footer
    </footer>

    </>
    )
}