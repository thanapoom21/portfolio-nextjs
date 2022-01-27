import Image from 'next/image'

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <Image width="50" height="50" src={picture} className="rounded-full" alt={name} />
      <div className="ml-4 text-xl font-bold">{name}</div>
    </div>
  )
}
