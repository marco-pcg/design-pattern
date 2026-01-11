
export type DogImageProps = {
    dogs: string[]
}

export default function DogImages({
    dogs
}: DogImageProps) {
    return (
        <>
            {dogs.map((dogUrl, index) => {
                <img
                    key={index}
                    src={dogUrl}
                    alt="Dog"
                />
            })}
        </>
    )
}