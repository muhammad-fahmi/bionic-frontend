import { useState } from "react";
import { Form } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";

function CleanStatus({ id }) {
    const [match, setMatch] = useState(false);
    const [unmatch, setUnmatch] = useState(false);

    return (
        <>
            <div className="d-flex justify-content-around p-3">
                <Form.Check inline label={"Sesuai"} type="radio" name={`kondisi_${id}`} id={`kondisi_sesuai_${id}`} style={{ fontSize: '18px' }} onClick={() => {
                    setMatch(true);
                    setUnmatch(false);
                }} />

                <Form.Check inline label={"Tidak Sesuai"} type="radio" name={`kondisi_${id}`} id={`kondisi_unmatch_${id}`} style={{ fontSize: '18px' }} onClick={() => {
                    setMatch(false);
                    setUnmatch(true);
                }} />

            </div>
            <div>
                {match ? <>
                    <div className="p-3">
                        <Form.Group controlId={id} className="mb-3">
                            <Form.Control type="file" />
                        </Form.Group>
                    </div>
                </> : ''}
                {unmatch ? <>
                    <div className="p-3">
                        <Form.Check>
                            <FormCheckLabel htmlFor={id.toString()}>This A Label</FormCheckLabel>
                            <FormCheckInput id={id.toString()} />
                        </Form.Check>
                    </div>
                    <div className="p-3">
                        <Form.Group controlId={id} className="mb-3">
                            <Form.Control type="file" />
                        </Form.Group>
                    </div>
                </> : ''}
            </div>
        </>
    )
}

export default CleanStatus