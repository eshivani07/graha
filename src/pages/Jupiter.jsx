import { Link } from 'react-router-dom'

function Jupiter() {
  return (
    <div>
      <h1>JUPITER</h1>
      <p>Largest planet in the solar system — more massive than all other planets combined.</p>
      <ul>
        <li>Largest planet in the solar system — more massive than all other planets combined</li>
        <li>Famous for the Great Red Spot, a giant storm larger than Earth that's raged for centuries</li>
        <li>Has a faint ring system and over 90 known moons, including the four large Galilean moons</li>
        <li>Made mostly of hydrogen and helium — a gas giant with no solid surface</li>
        <li>Acts as a "cosmic vacuum cleaner," its gravity deflecting comets and asteroids away from inner planets</li>
      </ul>
      <p>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  )
}

export default Jupiter
