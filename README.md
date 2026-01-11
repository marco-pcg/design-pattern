# React Design Patterns (Modern React + TypeScript) ⚛️🧩

This repository showcases **core React design patterns** as documented on **[patterns.dev](https://www.patterns.dev/)**, implemented using **modern React (18+) with TypeScript**.

The goal is to demonstrate **how and why these patterns exist**, how they evolved, and how they should be applied **today** using hooks, composition, and idiomatic TSX.

---

## 🎯 Purpose

* Learn **React architectural patterns** from first principles
* Translate legacy JavaScript examples into **modern TSX**
* Understand when to use (and avoid) each pattern
* Build scalable, readable, and maintainable React applications

---

## 🧠 Philosophy (Patterns.dev in Practice)

> Patterns are not rules — they are **tools**.

Modern React encourages:

* **Composition over inheritance**
* **Hooks over classes**
* **Explicit data flow**
* **Minimal abstractions**

This repository reflects those principles while staying faithful to the original intent of each pattern.

---

## 📦 Patterns Covered

| Pattern                    | Primary Use Case          | Modern Status      |
| -------------------------- | ------------------------- | ------------------ |
| Container / Presentational | Separate logic from UI    | ✅ Still useful     |
| Higher-Order Components    | Reuse cross-cutting logic | ⚠️ Legacy-heavy    |
| Render Props               | Dynamic rendering control | ⚠️ Mostly replaced |
| Hooks Pattern              | Reusable stateful logic   | ✅ Recommended      |
| Compound Components        | Flexible, implicit APIs   | ✅ Recommended      |

---

## 1️⃣ Container / Presentational Pattern

### Idea

Split components into:

* **Containers** → data, side effects, state
* **Presentational components** → pure UI

### Modern TSX Example

```tsx
// Presentational
export type DogImagesProps = {
  dogs: string[]
}

export function DogImages({ dogs }: DogImagesProps) {
  return (
    <>
      {dogs.map((url, index) => (
        <img key={index} src={url} alt="Dog" />
      ))}
    </>
  )
}
```

```tsx
// Container
export function DogImagesContainer() {
  const [dogs, setDogs] = useState<string[]>([])

  useEffect(() => {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then((res) => res.json())
      .then((data: { message: string[] }) => setDogs(data.message))
  }, [])

  return <DogImages dogs={dogs} />
}
```

📌 **Modern alternative:** extract logic into a custom hook.

---

## 2️⃣ Higher-Order Components (HOC)

### Idea

Wrap components to inject reusable behavior.

### Modern TSX Example

```tsx
function withLoading<P>(
  Component: React.ComponentType<P>
) {
  return function WithLoading(
    props: P & { isLoading: boolean }
  ) {
    if (props.isLoading) return <p>Loading...</p>
    const { isLoading, ...rest } = props
    return <Component {...(rest as P)} />
  }
}
```

```tsx
const UserListWithLoading = withLoading(UserList)
```

⚠️ **Note:** HOCs are mostly replaced by hooks but still appear in libraries.

---

## 3️⃣ Render Props Pattern

### Idea

Pass a function to control rendering.

### Modern TSX Example

```tsx
type FetcherProps<T> = {
  url: string
  children: (state: {
    loading: boolean
    data: T | null
  }) => JSX.Element
}

export function Fetcher<T>({ url, children }: FetcherProps<T>) {
  const [state, setState] = useState({
    loading: true,
    data: null as T | null,
  })

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setState({ loading: false, data }))
  }, [url])

  return children(state)
}
```

```tsx
<Fetcher url="/api/posts">
  {({ loading, data }) =>
    loading ? <p>Loading...</p> : <PostList posts={data!} />
  }
</Fetcher>
```

⚠️ **Today:** often replaced by hooks + composition.

---

## 4️⃣ Hooks Pattern (Preferred)

### Idea

Extract reusable stateful logic into **custom hooks**.

### Modern TSX Example

```tsx
export function useSearchFilter() {
  const [filterText, setFilterText] = useState("")
  const [inThisLocation, setInThisLocation] = useState(false)

  return {
    filterText,
    inThisLocation,
    setFilterText,
    toggleLocation: () => setInThisLocation((v) => !v),
  }
}
```

```tsx
export function SearchBar() {
  const { filterText, setFilterText } = useSearchFilter()

  return (
    <input
      value={filterText}
      onChange={(e) => setFilterText(e.target.value)}
    />
  )
}
```

✅ **This is the dominant React pattern today.**

---

## 5️⃣ Compound Components Pattern

### Idea

Let related components share implicit state via context.

### Modern TSX Example

```tsx
type FlyOutContextType = {
  open: boolean
  toggle: () => void
}

const FlyOutContext = createContext<FlyOutContextType | null>(null)

export function FlyOut({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <FlyOutContext.Provider
      value={{ open, toggle: () => setOpen((v) => !v) }}
    >
      {children}
    </FlyOutContext.Provider>
  )
}

export function FlyOutToggle() {
  const ctx = useContext(FlyOutContext)!
  return <button onClick={ctx.toggle}>Toggle</button>
}

export function FlyOutList({ children }: { children: ReactNode }) {
  const ctx = useContext(FlyOutContext)!
  return ctx.open ? <ul>{children}</ul> : null
}
```

---

## 🧠 Key Takeaways

* Hooks and composition replace most legacy patterns
* HOCs and Render Props are **conceptual foundations**
* Compound components enable powerful, flexible APIs
* Patterns improve **clarity**, not cleverness

---

## 🔗 References

* Patterns.dev — [https://www.patterns.dev/](https://www.patterns.dev/)
* React Docs — [https://react.dev/](https://react.dev/)
* TypeScript — [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## 🚀 Who This Is For

* Developers learning React architecture
* Engineers migrating JS → TypeScript
* Anyone preparing for advanced React interviews
* Teams standardizing component design

---

## 📜 License

MIT — learn the patterns, break them wisely ✨