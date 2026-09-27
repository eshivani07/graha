import { Link } from 'react-router-dom'

function Saturn() {
  return (
    <div>
      <h1>SATURN</h1>
      <p>Famous for its spectacular ring system made of ice and rock particles.</p>
      <ul>
        <li>Famous for its spectacular ring system made of ice and rock particles</li>
        <li>Least dense planet — it would float in water if you had a big enough tub</li>
        <li>Has 140+ known moons, including Titan, which has lakes of liquid methane</li>
        <li>A gas giant composed mainly of hydrogen and helium</li>
        <li>Experiences massive hexagonal-shaped storms at its north pole</li>
      </ul>
      <p>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  )
}

export default Saturn
