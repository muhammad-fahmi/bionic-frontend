import { Outlet } from "react-router";
import './css/Base.css';

function Base() {
    return (
        <div className="base_layout">
            <Outlet />
        </div>
    );
}

export default Base;