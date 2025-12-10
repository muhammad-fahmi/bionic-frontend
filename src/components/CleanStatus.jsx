import { useState } from "react";
import { FormCheck } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";

function CleanStatus({ id_item, aksi, type, register }) {
    const [unmatch, setUnmatch] = useState(false);

    return (
        <div>
            {/* Sesuai Standar */}
            <FormCheck label={type == "refill" ? "Tersedia" : "Bersih"} id={id_item + " sesuai"} type="radio" style={{ fontSize: '18px' }} onClick={() => {
                setUnmatch(false);
                // handleChange(e);
            }} {...register(`${id_item}.0`)} value={type == "refill" ? "tersedia" : "bersih"} />

            {/* Tidak Sesuai Standar */}
            <FormCheck label={type == "refill" ? "Tidak Tersedia" : "Kotor"} id={id_item + " tidak_sesuai"} type="radio" style={{ fontSize: '18px' }} onClick={() => {
                setUnmatch(true);
                // handleChange(e);
            }} {...register(`${id_item}.0`)} value={type == "refill" ? "tidak_tersedia" : "kotor"} />

            {/* Checkbox ketika tidak sesuai standar */}
            {unmatch ?
                <div className="p-3">
                    {aksi.map((aksi, index) => {
                        return (
                            <div key={id_item + "_" + index + "_" + aksi}>
                                <FormCheck>
                                    <FormCheckLabel htmlFor={id_item + "_" + index + "_" + aksi}>
                                        {aksi}
                                    </FormCheckLabel>
                                    <FormCheckInput
                                        {...register(`${id_item}.1.${aksi}`)}
                                        id={id_item + "_" + index + "_" + aksi}
                                        value={true} />
                                </FormCheck>
                            </div>
                        )
                    })}
                </div> : ''}
        </div>
    )
}

export default CleanStatus