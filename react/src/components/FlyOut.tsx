import { createContext, useContext, useState, type ReactNode } from "react"


type FlyOutContextType = {
    open: boolean
    toggle: () => void
}

const FlyOutContext = createContext<FlyOutContextType | undefined>(undefined)

type FlyOutProps = {
    children: ReactNode
}

export function FlyOut({ children }: FlyOutProps) {
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen((prev) => !prev)

    return (
        <FlyOutContext.Provider value={{ open, toggle }}>
            { children }
        </FlyOutContext.Provider>
    )
}

export function FlyOutToggle() {
    const ctx = useContext(FlyOutContext)

    if(!ctx) throw new Error("FlyOut components must be wrapped in")
    return <button onClick={ctx.toggle}>Toggle</button>
}

export function FlyOutList({ children }: { children: ReactNode }) {
    const ctx = useContext(FlyOutContext)

    if(!ctx) throw new Error("FlyOut components must be wrapped in")
    return ctx.open ? <ul>{children}</ul> : null
}

export function FlyOutItem({ children }: { children: ReactNode }) {
return <li>{children}</li>
}