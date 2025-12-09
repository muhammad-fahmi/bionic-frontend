import { lazy, Suspense } from "react";
import { useLoaderData, useNavigate } from "react-router";
const Pegawai = lazy(() => import('./Pegawai'));
const Verif = lazy(() => import('./Verifikator'));

function User() {
    const navigate = useNavigate();
    const loader = useLoaderData();
    const loginData = JSON.parse(localStorage.getItem('loginData'));
    if (loginData == null) {
        location.href = "/";
    }
    const nama = loginData.response.nama;
    const jabatan = loginData.response.jabatan;
    const shift = loginData.response.shift;


    if (jabatan == 'petugas') {
        return (<Suspense fallback={<div>Loading...</div>}>
            <Pegawai nama={nama} jabatan={jabatan} id_shift={shift} />
        </Suspense>)
    } else if (jabatan == 'verifikator') {
        return (<Suspense fallback={<div>Loading...</div>}>
            <Verif nama={nama} jabatan={jabatan} loaderData={loader} />
        </Suspense>)
    } else {
        return navigate(-1);
    }

}

export default User;