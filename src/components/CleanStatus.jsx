import { useState } from "react";
import { FormCheck } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";

function CleanStatus({ id, aksi, register }) {
    const [unmatch, setUnmatch] = useState(false);
    return (
        <>
            <FormCheck inline label={"Sesuai"} id={id + " sesuai"} type="radio" style={{ fontSize: '18px' }} onClick={() => {
                setUnmatch(false);
            }} {...register(`${id}.0`)} value={"sesuai"} />

            <FormCheck inline label={"Tidak Sesuai"} id={id + " tidak_sesuai"} type="radio" style={{ fontSize: '18px' }} onClick={() => {
                setUnmatch(true);
            }} {...register(`${id}.0`)} value={"tidak_sesuai"} />
            {unmatch ? <>
                <div className="p-3">
                    {aksi.map((aksi, index) => {

                        return (
                            <div key={id + "_" + index + "_" + aksi}>
                                <FormCheck>
                                    <FormCheckLabel htmlFor={id + "_" + index + "_" + aksi}>{aksi}</FormCheckLabel>
                                    <FormCheckInput {...register(`${id}.1.${aksi}`)} id={id + "_" + index + "_" + aksi} />
                                </FormCheck>
                            </div>
                        )
                    })}
                </div>
            </> : ''}
        </>
    )
}

export default CleanStatus