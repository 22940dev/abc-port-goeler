import clsx from "clsx"

type Props = { className?: string }

export default function Divider({ className = "" }: Props) {
    return <hr className={clsx("w-full border-gray-400", className)} />
}
