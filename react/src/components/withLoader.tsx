import type React from "react";
import { useEffect, useState } from "react";


export function withLoader<TProps extends object, TData>(
    Component: React.ComponentType<TProps & { data: TData }>,
    url: string
) {
    return (props: TProps) => {
        const [data, setData] = useState<TData | null>(null)

        useEffect(() => {
            async function fetchData() {
                const res = await fetch(url)
                const json = await res.json()
                setData(json)
            }
            fetchData()
        }, [url])

        if (!data) {
            return (
                <div>
                    Loading...
                </div>
            )
        }

        return <Component {...props} data={data} />
    }
}