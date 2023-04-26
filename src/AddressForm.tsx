import FormWrapper from "./FormWrapper"

type AddressData = {
    street: string,
    city: string,
    region: string,
    plz: string
}

type AddressFormProps = AddressData & {
    updateFields: (fields: Partial<AddressData>) => void
}

function AddressForm({street, city, region, plz, updateFields}: AddressFormProps) {
    return (
        <FormWrapper title="Address">
            <label>Street</label>
            <input 
                autoFocus 
                required 
                type="text"
                value={street}
                onChange={e => updateFields({street: e.target.value})}
            />
            <label>City</label>
            <input 
                required 
                type="text" 
                value={city}
                onChange={e => updateFields({city: e.target.value})}
            />
            <label>Region</label>
            <input 
                required 
                type="text"
                value={region}
                onChange={e => updateFields({region: e.target.value})}
            />
            <label>PLZ</label>
            <input 
                required 
                type="text"
                value={plz}
                onChange={e => updateFields({plz: e.target.value})}
            />
        </FormWrapper>
    )
}

export default AddressForm