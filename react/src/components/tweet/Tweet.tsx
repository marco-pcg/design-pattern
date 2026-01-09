import { TweetImage } from "./TweetImage";
import { User, type TweetUser } from "./User";

export type TweetProps = {
    author: TweetUser
    text: string
    image?: TweetImage
    date: Date
}

export function Tweet(props: TweetProps) {

    const formatDate = (date: Date): string => {
        return date.toLocaleString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        })
    }

    return (
        <div className="
            Tweet w-[320px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm
            dark:border-gray-700 dark:bg-gray-900
        ">
            <User user={props.author} />
            <div className="
                Tweet-text mt-2 text-sm text-gray-800
                dark:bg-gray-100
            ">
                {props.text}
            </div>
            { 
                props.image && (
                    <TweetImage image={props.image} />
                )
            }
            <div className="
                Tweet-date mt-2 block text-xs text-gray-400
                dark:text-gray-500
            ">
                {formatDate(props.date)}
            </div>
        </div>
    )
}