import { Link } from 'react-router-dom'

function Earth() {
  return (
    <div>
      <h1>EARTH</h1>
      <p>The only known planet to support life.</p>
      <ul>
        <li>The only known planet to support life</li>
        <li>71% of its surface is covered by water</li>
        <li>Has one natural satellite — the Moon — which stabilizes its tilt and causes tides</li>
        <li>Protected by a magnetic field that shields us from solar radiation</li>
        <li>Atmosphere is rich in nitrogen and oxygen, unique among the planets</li>
      </ul>
      <p>
        <Link to="/moon">Explore Earth's Moon</Link>
      </p>
      <p>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  )
}

export default Earth
