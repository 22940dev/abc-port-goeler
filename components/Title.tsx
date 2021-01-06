import clsx from "clsx"

type Props = {
    variant: "h1" | "h2" | "h3" | "h4"
    className?: string
    children: any
    thin?: boolean
}

export default function Title({ variant, children, className = "", thin = false }: Props) {
    const baseStyles = ["tracking-tight", thin ? "font-medium" : "font-bold"].join(" ")
    if (variant === "h1") {
        return <h1 className={clsx("text-3xl md:text-5xl", baseStyles, className)}>{children}</h1>
    }
    if (variant === "h2") {
        return <h2 className={clsx("text-2xl md:text-4xl", baseStyles, className)}>{children}</h2>
    }
    if (variant === "h3") {
        return <h3 className={clsx("text-xl md:text-3xl", baseStyles, className)}>{children}</h3>
    }
    if (variant === "h4") {
        return <h4 className={clsx("text-lg md:text-xl", baseStyles, className)}>{children}</h4>
    }
}
