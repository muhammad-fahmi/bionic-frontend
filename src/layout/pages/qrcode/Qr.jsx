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
            {data.map((item) => {
                let data = JSON.stringify(item);
                return (
                    <div className='col d-flex flex-column align-items-center'>
                        <QRCodeSVG value={data} size={150} level="L" className='row-6' />
                        <div className='row-6'>
                            <h5 className='text-center fw-bold'>{item.lokasi}</h5>
                            <p className='text-center'>Link: "https://bionic-natura.cloud/bionic-frontend/"</p>
                        </div>
                    </div>
                )
            })}
        </div>

    );
}

export default Qr;