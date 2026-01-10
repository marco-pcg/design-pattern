import { useState } from "react"
import { SearchBar } from "./SearchBar"
import { TweetList } from "./TweetList"
import type { TweetProps } from "../tweet/Tweet"

export type TweetSearchResultsProps = {
    tweets?: TweetProps[]
}

export function TweetSearchResults({ tweets }: TweetSearchResultsProps) {

    const [filterText, setFilterText] = useState('')
    const [inThisLocation, setInThisLocation] = useState(false)

    return (
        <div>
            <SearchBar 
                filterText={filterText}
                inThisLocation={inThisLocation}
                setFilterText={setFilterText}
                setInThisLocation={setInThisLocation}
            />
            {
                tweets && (
                    <TweetList 
                        tweets={tweets}
                        filterText={filterText}
                        inThisLocation={inThisLocation}
                    />
                )
            }
        </div>
    )
}