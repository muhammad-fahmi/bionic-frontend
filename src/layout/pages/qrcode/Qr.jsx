import axios from 'axios';
import { QRCodeSVG } from 'qrcode.react';
import { Fragment, useEffect, useState } from 'react';

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
        <div className='container-fluid bg-transparent'>
            <div className="row" style={{padding: '16px'}}>
                {data.map((item) => {
                    let data = JSON.stringify(item);
                    return (
                        <Fragment>
                            <div className='col-3 text-center p-3 d-flex flex-column align-items-center border border-1'>
                                <QRCodeSVG value={data} size={75} level="M" />
                                <h6 className='fw-bold mb-1' style={{ fontSize: '16px', textTransform: 'uppercase' }}>{item.lokasi}</h6>
                            </div>
                        </Fragment>
                    )
                })}
            </div>

        </div>


    );
}

export default Qr;