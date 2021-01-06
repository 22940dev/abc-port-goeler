type Props = {
    href: string
    children: any
}

export default function Link({ href, children }: Props) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    )
}
