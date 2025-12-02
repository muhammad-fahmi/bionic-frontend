import axios from "axios";
import { useEffect, useState } from "react";
import { Badge, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

function Verifikator({ nama, jabatan }) {
    const [data, setData] = useState([]);
    const [button, setButton] = useState(false);
    const navigate = useNavigate();
    // const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        axios.get('/api/submitted_task')
            .then((response) => response.data)
            .then((response) => {
                setData(response);
            });
    }, [])

    useEffect(() => {
        axios.get('/api/submitted_task')
            .then((response) => response.data)
            .then((response) => {
                setData(response);
            });
    }, [button])


    const handleSubmit = (submitValue, id, tanggal, petugas) => {
        axios.put('/api/submitted_task', {
            data: submitValue,
            id: id,
            tanggal: tanggal,
            petugas: petugas
        })
            .then(() => {
                setButton(!button);
            })
    }



    // const checkDetail = () => {
    //     setModalShow(true);
    // }


    return (
        <div>
            {/* <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => { setModalShow(false) }}>Close</Button>
                </Modal.Footer>
            </Modal> */}
            <div className="card">
                <div className="row p-3 align-items-center justify-content-center">
                    <div className="col-3">
                        <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=1000" alt="Profile" className="rounded-circle" style={{ width: '20vw' }} />
                    </div>
                    <div className="col-9">
                        <table className="table table-striped" style={{ width: '100%', fontSize: '3vw', margin: 'auto' }}>
                            <tbody>
                                <tr>
                                    <td>Nama</td>
                                    <td>:</td>
                                    <td>{nama}</td>
                                </tr>
                                <tr>
                                    <td>Jabatan</td>
                                    <td>:</td>
                                    <td>{jabatan.charAt(0).toUpperCase() + jabatan.slice(1)}</td>
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
            <div className={`card mt-2 p-3`}>
                <h5 className="text-center">Task List</h5>
                <hr style={{ border: '5px solid black' }} />
                <div style={{ overflowX: 'scroll' }}>
                    <table className="table text-center" style={{ verticalAlign: 'middle' }}>
                        <thead>
                            <tr>
                                <th>Tanggal</th>
                                <th>Nama</th>
                                <th>Lokasi</th>
                                <th>Shift</th>
                                <th>Status Task</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => {
                                const jsDateObject = new Date(item.tanggal);
                                const timestamp = jsDateObject.getTime();
                                return (
                                    <tr key={timestamp}>
                                        <td>{item.tanggal}</td>
                                        <td>{item.petugas}</td>
                                        <td>{item.lokasi.toUpperCase()}</td>
                                        <td>{item.shift}</td>
                                        <td>
                                            {item.status == 'pending' && <Badge pill bg="warning">{item.status}</Badge>}
                                            {item.status == 'approved' && <Badge pill bg="success">{item.status}</Badge>}
                                            {item.status == 'rejected' && <Badge pill bg="danger">{item.status}</Badge>}
                                        </td>
                                        <td>
                                            {(item.status == 'approved' || item.status == 'rejected') ? 'Detail (on progress)' : <div>
                                                <Button variant="success" onClick={() => {
                                                    handleSubmit('approved', item.id, item.tanggal, item.petugas);
                                                }} className="mx-2"><i className="fa-solid fa-check"></i>Terima</Button>
                                                <Button variant="danger" onClick={() => {
                                                    handleSubmit('rejected', item.id, item.tanggal, item.petugas);
                                                }} className="mx-2"><i className="fa-solid fa-xmark"></i>Tolak</Button>
                                            </div>}

                                            {/* <Button onClick={() => {
                                                checkDetail
                                            }}>
                                                <i class="fa-solid fa-magnifying-glass"></i>
                                                Detail
                                            </Button> */}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Verifikator