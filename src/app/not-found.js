import Link from "next/link";

export default function NotFound() {
    return(
        <div>
        <h1>page not found </h1>
        <Link href={'/'}>back to home </Link>
        </div>
    )
}