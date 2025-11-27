import { Scanner } from "@yudiel/react-qr-scanner";
import axios from "axios";
import { useLayoutEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { OrbitProgress } from "react-loading-indicators";
import { Form, useNavigate } from "react-router";
import CleanStatus from "../../../components/CleanStatus";

function formatString(inputString) {
    // Replace underscores with spaces
    let spacedString = inputString.replaceAll('_', ' ');

    // Capitalize the first letter
    if (spacedString.length === 0) {
        return ""; // Handle empty string case
    }
    let capitalizedString = spacedString.charAt(0).toUpperCase() + spacedString.substring(1);

    return capitalizedString;
}

export default function Pegawai(props) {
    const [isAvailable, setIsAvailable] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('');
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const handleScan = async (detectedBarcode) => {
        setIsAvailable(1);
        setIsPaused(true);
        setIsLoading(true);
        let barcodeData = JSON.parse(detectedBarcode[0].rawValue);
        let response = await axios.get('/api/api/task/' + barcodeData.shift + '/' + barcodeData.id);
        response = response.data;
        localStorage.setItem('scanData', JSON.stringify(response));
        if (response.length == 0) {
            alert("Data Yang di scan tidak ada!");
            setIsAvailable(0);
            setIsPaused(false);
            setIsLoading(false);
        }
        if (response[0].shift != props.id_shift) {
            alert("Tempat ini bukan bagian shift anda!");
            setIsAvailable(0);
            setIsPaused(false);
            setIsLoading(false);
        } else {
            setData(response);
            setTitle(response[0].lokasi);
            setIsLoading(false);
        }
    };


    const onSubmit = (data) => {
        const scanDataLocal = JSON.parse(localStorage.getItem('scanData'))[0];
        axios.post('/api/task/submit', {
            data: { ...props, ...{ lokasi: scanDataLocal['lokasi'], lokasi_id: scanDataLocal['lokasi_id'] }, data }
        });
    };

    useLayoutEffect(() => {
        if (localStorage.getItem('scanData') != null) {
            let scanData = JSON.parse(localStorage.getItem('scanData'));
            setData(scanData);
            setTitle(scanData[0].lokasi);
            setIsLoading(false);
            setIsAvailable(1);
            setIsPaused(true);
        }
    }, []);

    return (
        <>
            <div className="card">
                <div className="row p-3 align-items-center justify-content-center">
                    <div className="col-3">
                        <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=1000" alt="Profile" className="rounded-circle" style={{ width: '20vw' }} />
                    </div>
                    <div className="col-9" style={{ overflow: 'hidden', borderRadius: '6px' }}>
                        <table className="table table-striped rounded" style={{ width: '100%', fontSize: '3vw', margin: 'auto' }}>
                            <tbody>
                                <tr>
                                    <td>Nama</td>
                                    <td>:</td>
                                    <td>{props.nama}</td>
                                </tr>
                                <tr>
                                    <td>Jabatan</td>
                                    <td>:</td>
                                    <td>{props.jabatan}</td>
                                </tr>
                                <tr>
                                    <td>Shift</td>
                                    <td>:</td>
                                    <td>{props.id_shift}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <button className="btn btn-sm btn-danger my-2" onClick={() => {
                                localStorage.removeItem('loginData');
                                localStorage.removeItem('scanData');
                                navigate('/');
                            }}><i className="fa-solid fa-power-off"></i>
                                Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`card mt-2 d-flex justify-content-center ${isAvailable == 0 ? '' : 'd-none'} `}>
                <div className="col p-3">
                    <Scanner
                        onScan={handleScan}
                        onError={(error) => {
                            console.log(error)
                        }}
                        classNames={{
                            container: 'rounded'
                        }}
                        allowMultiple={false}
                        scanDelay={1500}
                        constraints={{
                            facingMode: 'environment', // Use rear camera
                            aspectRatio: 1, // Square aspect ratio
                            // Advanced constraints
                            width: { ideal: 1920 },
                            height: { ideal: 1080 },
                        }}
                        formats={['qr_code']}
                        styles={{
                            container: {
                                width: '50vw',
                                margin: 'auto'
                            },
                        }}
                        components={{
                            onOff: true,
                            torch: false,
                            zoom: false,
                            finder: true
                        }}
                        sound={false}
                        paused={isPaused}
                    />
                </div>
            </div>
            <div className={`text-center ${isLoading ? '' : 'd-none'}`} style={{ marginTop: '200px' }}>
                <OrbitProgress variant="dotted" dense color="#000000" size="medium" text="" textColor="" />
            </div>

            <div className={`card ${isAvailable == 1 ? '' : 'd-none'} ${isLoading ? 'd-none' : ''} mt-2`}>
                {/* Title */}
                <h4 className="text-center p-2">
                    <span className="text-uppercase border-bottom border-3 border-dark rounded-pill pb-1 p-2">{title}</span>
                </h4>
                <div className="p-3">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        {data.map(item => {
                            return (
                                <Card className="my-2" key={item.id}>
                                    <CardHeader children={<h6>{formatString(item.item)}</h6>} />
                                    <CardBody >
                                        <CleanStatus id={item.id} nama={item.item} aksi={item.aksi} register={register} />
                                    </CardBody>
                                </Card>
                            );
                        })}

                        <div className={`row p-3 ${isLoading ? 'd-none' : ''}`}>
                            <div className={`col-6`}>
                                <button type="submit" className="btn btn-primary" onClick={() => {
                                    setIsAvailable(0);
                                    setIsPaused(false);
                                    setIsLoading(false);
                                }}>Submit</button>
                            </div>
                            <div className={`col-6 text-end`}>
                                <button type="button" className="btn btn-danger" onClick={() => {
                                    setIsAvailable(0);
                                    setIsPaused(false);
                                    setIsLoading(false)
                                    localStorage.removeItem('scanData');
                                }}>Cancel</button>
                            </div>
                        </div>
                    </Form>
                </div>

            </div>
        </>
    );
};