import { useLoaderData, useNavigate } from "react-router";
import Pegawai from './Pegawai';
import Verif from './Verifikator';

function User() {
    const navigate = useNavigate();
    const loader = useLoaderData();
    const loginData = JSON.parse(localStorage.getItem('loginData'));
    const nama = loginData.response.nama;
    const jabatan = loginData.response.jabatan;
    const shift = loginData.response.shift;


    if (jabatan == 'petugas') {
        return <Pegawai nama={nama} jabatan={jabatan} id_shift={shift} />
    } else if (jabatan == 'verifikator') {
        return <Verif nama={nama} jabatan={jabatan} loaderData={loader}/>
    } else {
        return navigate(-1);
    }

}

export default User;