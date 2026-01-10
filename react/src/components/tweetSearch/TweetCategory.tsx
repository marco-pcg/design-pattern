export type TweetCategoryProps = {
    category: string
}

export function TweetCategory({ category }: TweetCategoryProps) {
    <tr>
        <th colSpan={2}>{category}</th>
    </tr>
}