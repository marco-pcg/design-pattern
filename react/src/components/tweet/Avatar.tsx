import type { TweetUser } from "./User"

type TweetAvatar = {
    user: TweetUser
}

export function Avatar(props: TweetAvatar) {
    return (
        <img
            className="Avatar h-10 rounded-full object-cover"
            src={props.user.avatarUrl}
            alt={props.user.name}
            loading="lazy"
        />
    )
}