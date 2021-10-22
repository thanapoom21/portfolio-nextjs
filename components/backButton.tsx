import Link from 'next/link'

const BackButton = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
      <Link href="/blog">
        <a className="hover:underline">← Go Back</a>
      </Link>
    </h2>
  )
}

export default BackButton;