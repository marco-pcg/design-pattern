import type { ChangeEvent, ChangeEventHandler } from "react"

export type SearchBarProps = {
    filterText: string
    inThisLocation: boolean
    setFilterText: (value: string) => void
    setInThisLocation: (value: boolean) => void
}

export function SearchBar({
    filterText,
    inThisLocation,
    setFilterText,
    setInThisLocation
}: SearchBarProps) {
    <form>
        <input 
            type="text"
            placeholder="Search..."
            value={filterText}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} 
        />
        <p>
            <label>
                <input 
                    type="checkbox"
                    checked={inThisLocation}
                    onChange={ (e: ChangeEvent<HTMLInputElement>) => setInThisLocation(e.target.checked)}
                />{" "}
                Only show tweets in your current location
            </label>
        </p>
    </form>
}