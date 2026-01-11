import { withLoader } from "./withLoader"

export type DogImageProps = {
    data: { message: string[] }
}

function DogImages({
    data
}: DogImageProps) {
    return (
        <>
            {data.message.map((url, index) => {
                <img
                    key={index}
                    src={url}
                    alt="Dog"
                />
            })}
        </>
    )
}

export default withLoader(
    DogImages,
    "https://dog.ceo/api/breed/labrador/images/random/6"
)