export type TweetCategoryProps = {
    category: string
}

export function TweetCategory({ category }: TweetCategoryProps) {
    return (
        <tr>
            <th colSpan={2}>{category}</th>
        </tr>
    )
}