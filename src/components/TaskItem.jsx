import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useFetcher } from "react-router";

function TaskItem() {
    const fetcher = useFetcher();
    const [terima, setTerima] = useState(false);
    const [tolak, setTolak] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        let submissionData = {
            terima,
            tolak
        };
        fetcher.submit(submissionData, {
            method: "post",
        });
    }

    useEffect(() => {
        if (fetcher.data == undefined) return;
        console.log(fetcher.data);
    }, [fetcher.data]);

    const isSubmitting = fetcher.state !== 'idle';
    return (
        <fetcher.Form method="post" onSubmit={handleSubmit}>
            <Button className="btn btn-success mx-2"
                type="submit"
                disabled={isSubmitting}
                onClick={() => {
                    setTerima(!terima);
                }}>
                <i className="fa-solid fa-circle-check"></i>
                Terima
            </Button>
            <Button className="btn btn-danger mx-2"
                type="submit"
                disabled={isSubmitting}
                onClick={() => {
                    setTolak(!tolak);
                }}>
                <i className="fa-solid fa-circle-xmark"></i>
                Tolak

            </Button>
        </fetcher.Form>);
}

export default TaskItem;