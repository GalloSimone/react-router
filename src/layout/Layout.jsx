import { Outlet } from "react-router-dom";

export default function Layout(){
    <>
    <header>Navlink</header>

    <main>
        <Outlet/>
    </main>

    <footer>
        footer
    </footer>
    </>
}