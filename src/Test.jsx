import { useFieldArray, useForm } from "react-hook-form";

function Test() {
    // let data = useLoaderData();
    // const submit = useSubmit();
    // const [title, setTitle] = useState(data.title);

    // return (<>
    //     <h1>{title}</h1>
    //     <br /><br />
    //     <Form onSubmit={(event) => {
    //         event.preventDefault();
    //         handleSubmit({
    //             data: JSON.stringify(person),
    //             title: "test JSON"
    //         });
    //     }}>
    //         <input type="text" onChange={(event) => setTitle(event.target.value)} />
    //         <input type="text" onChange={(event) => setPerson((prevData) => {
    //             return { ...prevData, name: event.target.value }
    //         })} />
    //         <input type="text" onChange={(event) => setPerson((prevData) => {
    //             return { ...prevData, age: event.target.value }
    //         })} />
    //         <button type="submit">Submit</button>
    //     </Form>

    // </>)

    const { register, handleSubmit, control } = useForm({
        defaultValues: {
            dataItem: [{ item: '', aksi: '' }],
        },
    });
    const { fields } = useFieldArray({
        control,
        name: 'dataItems',
    });

    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field, index) => (
                <div key={field.id}>
                    <input {...register(`dataItems.${index}.label`)} placeholder="Dynamic Label" />
                    <input {...register(`dataItems.${index}.value`)} placeholder="Dynamic Value" />
                </div>
            ))}

            <button type="submit">Submit</button>
        </form>
    );
}

export default Test