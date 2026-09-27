import { Link } from 'react-router-dom'

function Venus() {
  return (
    <div>
      <h1>VENUS</h1>
      <p>Hottest planet in the solar system due to a runaway greenhouse effect.</p>
      <ul>
        <li>Hottest planet in the solar system (~465°C) due to a runaway greenhouse effect</li>
        <li>Thick atmosphere of carbon dioxide with clouds of sulfuric acid</li>
        <li>Rotates backwards (retrograde) compared to most planets</li>
        <li>A day on Venus is longer than its year (243 vs 225 Earth days)</li>
        <li>Often called Earth's "twin" due to similar size, but conditions are hellish</li>
      </ul>
      <p>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  )
}

export default Venus
