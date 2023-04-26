import FormWrapper from "./FormWrapper"

function AddressForm() {
    return (
        <FormWrapper title="Address">
            <label>Street</label>
            <input autoFocus required type="text"/>
            <label>City</label>
            <input required type="text"/>
            <label>Region</label>
            <input required type="text"/>
            <label>PLZ</label>
            <input required type="text"/>
        </FormWrapper>
    )
}

export default AddressForm