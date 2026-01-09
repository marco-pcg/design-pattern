
export type TweetImage = {
    imageUrl: string
    description?: string
}

export function TweetImage(props: { image: TweetImage }) {
    return (
        <img 
            className="Tweet-image mt-3 h-40 w-full rounded-lg object-cover dark:opacity-90"
            src={props.image.imageUrl}
            alt={props.image.description ?? "Tweet Image"} 
            loading="lazy"
        />
    )
}