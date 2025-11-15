export default function Header() {
  return (
    <header className="pt-2 pl-2 sticky top-0 z-50 bg-primary">
      <ul className="flex gap-4">
        <li className="font-display"><a href="#home">Home</a></li>
        <li className="font-display text-noActive">Archive</li>
        <li className="font-display text-noActive"><a href="#profile">Profile</a></li>
      </ul>
      <hr className="pl-0 color-white" />
    </header>
  )
}