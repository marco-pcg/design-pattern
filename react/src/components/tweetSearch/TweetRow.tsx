import type { TweetProps } from "../tweet/Tweet"

export type TweetRowProps = {
    tweet: TweetProps
}

export function TweetRow({ tweet }: TweetRowProps) {
    const color = tweet.isLocal ? 'inherit' : 'red'

    return (
        <tr>
            <td>
                <span className={`text-${color ? `${color}-500`: color }`}>{tweet.text}</span>
            </td>
            <td>{tweet.retweets}</td>
        </tr>
    )
}