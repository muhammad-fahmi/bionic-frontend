import axios from 'axios';
import { QRCodeSVG } from 'qrcode.react';
import { useEffect, useState } from 'react';

function Qr() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('/api/api/qr')
            .then((response) => response.data)
            .then((response) => {
                setData(response);
            });
    }, []);

    return (
        <div className='row d-flex justify-content-center align-items-center container-fluid' style={{ minHeight: '100vh' }}>
            {data.map(item => {
                let data = JSON.stringify(item);
                return (
                    <div className='d-flex flex-column justify-content-center align-items-center m-3' key={item.id}>
                        <QRCodeSVG value={data} size={512} level="H" className='col-12' />
                        <h2 className='text-center fw-bold'>{item.lokasi}</h2>
                        <p className='text-center fw-bold' style={{ fontSize: '24px' }}>Shift: {item.shift}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Qr;