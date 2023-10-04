import { useState } from "react"
import { useSetFilterCriteriaMutation } from "../api/users.api"

export const AdvancedFilters: React.FC = () => {
    const [ setFilterCriteria ] = useSetFilterCriteriaMutation()

    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setFilterCriteria({city, country})
    }

    return (
        <aside className="advanced-filters">
            <h3>Advanced Filters</h3>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="city">City</label>
                    <select id="city" onChange={(e) => setCity(e.target.value)}>
                        <option value="">--Select--</option>
                        <option value="Pune">Pune</option>
                        <option value="Basel">Basel</option>
                        <option value="Mumbai">Mumbai</option>
                    </select>
                </fieldset>

                <fieldset>
                    <label htmlFor="country">Country</label>
                    <select id="country" onChange={(e) => setCountry(e.target.value)}>
                        <option value="">--Select--</option>
                        <option value="India">India</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="France">France</option>
                    </select>
                </fieldset>

                <input type="submit" value="Apply" />
            </form>
        </aside>
    )
}