 function Verifikator(props) {
    // const [data, setData] = useState('');
    // const taskList = [];
    // useEffect(() => {
    //     axios.get('/api/api/submitted_task')
    //         .then((response) => {
    //             setData(response.data);
    //         });
    // }, []);

    // Object.keys(data).map((key) => {
    //     taskList.push(data[key]);
    // });
    return (
        <>
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
                                    <td>{props.nama}</td>
                                </tr>
                                <tr>
                                    <td>Jabatan</td>
                                    <td>:</td>
                                    <td>{props.jabatan}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className={`card mt-2 p-3`}>
                <h5 className="text-center">Task List</h5>
                <hr style={{ border: '5px solid black' }} />
                <div style={{ overflowX:'scroll' }}>
                    <table className="table text-center" style={{ verticalAlign: 'middle' }}>
                        <thead>
                            <tr>
                                <th>Tanggal</th>
                                <th>Nama</th>
                                <th>Ruangan</th>
                                <th>Shift</th>
                                <th>Kondisi</th>
                                <th>Status Laporan</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {taskList.map(item => {
                            return (
                                <tr>
                                    <td>{item.tanggal}</td>
                                    <td>{item.nama_pegawai}</td>
                                    <td>{item.ruangan}</td>
                                    <td>{item.shift}</td>
                                    <td>{item.status}</td>
                                    <td>Menunggu</td>
                                    <td>
                                        <ButtonGroup>
                                            <Button className="btn btn-success">Terima</Button>
                                            <Button className="btn btn-danger">Tolak</Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            );
                        })} */}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default Verifikator