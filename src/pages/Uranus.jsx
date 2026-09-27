import { Link } from 'react-router-dom'

function Uranus() {
  return (
    <div>
      <h1>URANUS</h1>
      <p>Rotates on its side, likely due to an ancient collision.</p>
      <ul>
        <li>Rotates on its side (axial tilt of ~98°), likely due to an ancient collision</li>
        <li>An "ice giant" made of water, ammonia, and methane ices</li>
        <li>Appears pale blue-green due to methane in its atmosphere absorbing red light</li>
        <li>Has faint rings and 27 known moons, mostly named after literary characters</li>
        <li>Coldest planetary atmosphere in the solar system despite not being the farthest planet</li>
      </ul>
      <p>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  )
}

export default Uranus
