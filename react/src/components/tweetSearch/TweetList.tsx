import type { TweetProps } from "../tweet/Tweet"

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

    const rows: string[] = []
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
                
                />
            )
        }
        rows.push(<TweetRow />)
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