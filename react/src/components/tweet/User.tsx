import { Avatar } from "./Avatar";

export type TweetUser = {
    name: string,
    avatarUrl: string
}

export function User (props: { user: TweetUser }) {
    return (
        <div className="User flex items-center gap-3">
            <Avatar user={props.user} />
            <div className="User-name text-sm font-semibold text-gray-900 dark:text-gray-100">
                {props.user.name}
            </div>
        </div>
    )
}