import { FormLabel } from "react-bootstrap"

export const Label = ({forLabel,value}) => {
return(
    <>
        <FormLabel htmlFor={forLabel}>{value}</FormLabel>
    </>
)
}