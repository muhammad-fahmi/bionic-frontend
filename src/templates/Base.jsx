import { Outlet } from "react-router";
import './Base.css';

function Base() {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default Base;