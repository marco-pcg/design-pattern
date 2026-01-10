import { useState } from "react"

export function TweetSearchResults({ tweets }) {

    const [filterText, setFilterText] = useState('')
    const [inThisLocation, setInThisLocation] = useState(false)

    return (
        <div>
            <SearchBar 

            />
            <TweetList 

            />
        </div>
    )
}