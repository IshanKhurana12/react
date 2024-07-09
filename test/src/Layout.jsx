import { Outlet,Link } from "react-router-dom";

function Layout(){
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/exp">Expensive calculation</Link>
                </li>
            </ul>
        </nav>
        
        <Outlet />
        </>
    )
}

export default Layout;