import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const Main = ({ children }: Props) => {
    return <div className="mt-10">{children}</div>
}

export default Main
