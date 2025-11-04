export default function Header() {
  return (
    <>
    <header className="pt-2 pl-2">
      <ul className="flex gap-4">
        <li className="font-display">Home</li>
        <li className="font-display text-noActive">Archive</li>
        <li className="font-display text-noActive">Profile</li>
      </ul>
    </header>
    <hr className="color-white" />
    </>
  )
}