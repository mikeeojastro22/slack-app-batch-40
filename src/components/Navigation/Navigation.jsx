import { NavLink, Outlet } from 'react-router-dom';
import './Navigation.css';

function Navigation({ onLogout }) {
    return (
        <div className='navigation'>
            <header>
                <nav>
                    <NavLink className="item" to="/">Home</NavLink>
                    <NavLink className="item" to="bank">Bank</NavLink>
                    <NavLink className="item" to="budget">Budget</NavLink>
                    <button onClick={onLogout}>Logout</button>
                </nav>
            </header>
            <Outlet />
        </div>
    );
}

export default Navigation;
