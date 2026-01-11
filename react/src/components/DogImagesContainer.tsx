import { useEffect, useState } from "react";
import DogImages from "./DogImages";

const DOGS_URL = "https://dog.ceo/api/breed/labrador/images/random/6"

export default function DogImagesContainer() {

    const [dogs, setDogs] = useState<string[]>([])

    useEffect(() => {
        fetch(DOGS_URL)
            .then((res) => res.json())
            .then((data: { message: string[] }) => setDogs(data.message))
    }, [])

    return <DogImages dogs={dogs} />
}