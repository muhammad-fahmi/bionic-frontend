import { useState } from "react";

export default function MenuButton({ parentHandleClick }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (args) => {
        parentHandleClick(args);
        setIsClicked(true);
    };

    const data = [
        {
            "id": 1,
            "icon": "fa-user",
            "nama_menu": "Manajemen User",
            "onClick": () => handleClick('user')
        },
        {
            "id": 2,
            "icon": "fa-gear",
            "nama_menu": "Manajemen User",
            "onClick": () => handleClick('user')
        },
        {
            "id": 3,
            "icon": "fa-gear",
            "nama_menu": "Master Alat",
            "onClick": () => handleClick('m_alat')
        },
    ];

    return (
        <div className="card my-3">
            <div className={`row ${isClicked ? 'd-none' : ''} card-body`}>
                {data.map((item) => {
                    return (
                        <button className="btn btn-primary my-3" style={{ height: '100px', width: '100%' }} onClick={item.onClick} key={item.id}>
                            <i className={`fa-solid ${item.icon}`} style={{ fontSize: '6vw' }}></i>
                            <p style={{ fontSize: '4vw' }}>{item.nama_menu}</p>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}