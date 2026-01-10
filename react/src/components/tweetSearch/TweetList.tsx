import type { JSX } from "react"
import type { TweetProps } from "../tweet/Tweet"
import { TweetCategory } from "./TweetCategory"
import { TweetRow } from "./TweetRow"

export type TweetListProps = {
    tweets: TweetProps[]
    filterText: string
    inThisLocation: boolean
}

export function TweetList({
    tweets,
    filterText,
    inThisLocation
}: TweetListProps) {

    const rows: JSX.Element[] = []
    let lastCategory: string | null = null

    tweets.forEach((tweet) => {
        if (tweet.text.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
            return
        }
        if (inThisLocation && !tweet.isLocal) {
            return
        }
        if (tweet.category !== lastCategory) {
            rows.push(
                <TweetCategory
                    category={tweet.category}
                    key={tweet.category}
                />
            )
        }
        rows.push(<TweetRow tweet={tweet} key={tweet.text} />)
        lastCategory = tweet.category
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>Tweet Text</th>
                    <th>Retweets</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}