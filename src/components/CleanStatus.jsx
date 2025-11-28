import { useState } from "react";
import { FormCheck } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";

function CleanStatus({ id_item, aksi, register }) {
    const [unmatch, setUnmatch] = useState(false);
    // const [formData, setFormData] = useState({});

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData(prevData => ({
    //         ...prevData,
    //         [name]: value
    //     }));
    // };

    return (
        <div>
            {/* Sesuai Standar */}
            <FormCheck label={"Sesuai Standar"} id={id_item + " sesuai"} type="radio" style={{ fontSize: '18px' }} onClick={() => {
                setUnmatch(false);
                // handleChange(e);
            }} {...register(`${id_item}.0`)} value={"sesuai"} />

            {/* Tidak Sesuai Standar */}
            <FormCheck label={"Tidak Sesuai Standar"} id={id_item + " tidak_sesuai"} type="radio" style={{ fontSize: '18px' }} onClick={() => {
                setUnmatch(true);
                // handleChange(e);
            }} {...register(`${id_item}.0`)} value={"tidak_sesuai"} />

            {/* Checkbox ketika tidak sesuai standar */}
            {unmatch ?
                <div className="p-3">
                    {aksi.map((aksi, index) => {
                        return (
                            <div key={id_item + "_" + index + "_" + aksi}>
                                <FormCheck>
                                    <FormCheckLabel htmlFor={id_item + "_" + index + "_" + aksi}>{aksi}</FormCheckLabel>
                                    <FormCheckInput {...register(`${id_item}.1.${aksi}`)} id={id_item + "_" + index + "_" + aksi} name={id_item + "_" + index + "_" + aksi} />
                                </FormCheck>
                            </div>
                        )
                    })}
                </div> : ''}
        </div>
    )
}

export default CleanStatus