import { Link } from 'react-router-dom'

function Neptune() {
  return (
    <div>
      <h1>NEPTUNE</h1>
      <p>Farthest known planet from the Sun, taking 165 years to complete one orbit.</p>
      <ul>
        <li>Farthest known planet from the Sun, taking 165 years to complete one orbit</li>
        <li>Windiest planet, with speeds reaching up to 2,100 km/h (1,300 mph)</li>
        <li>Deep blue color comes from methane in its atmosphere</li>
        <li>Has 14 known moons; Triton orbits backward and may be a captured Kuiper Belt object</li>
        <li>Discovered through mathematical prediction before it was directly observed (1846)</li>
      </ul>
      <p>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  )
}

export default Neptune
