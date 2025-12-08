import axios from 'axios';
import { QRCodeSVG } from 'qrcode.react';
import { useEffect, useState } from 'react';

function Qr() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('/api/qr')
            .then((response) => response.data)
            .then((response) => {
                setData(response);
            });
    }, []);

    return (
        <div className='row'>
            {data.map(item => {
                let data = JSON.stringify(item);
                return (
                        <div className='col-4 d-flex flex-column justify-content-center align-items-center p-2' key={item.id}>
                            <QRCodeSVG value={data} size={512} level="H" className='col-12 mb-0' />
                            <h2 className='text-center fw-bold'>{item.lokasi}</h2>
                            <p className='text-center fw-bold' style={{ fontSize: '24px' }}>Shift: {item.shift}</p>
                            <p className='text-center'>Link: "https://bionic-natura.cloud/bionic-frontend/"</p>
                        </div>
                )
            })}
        </div>
    );
}

export default Qr;