import { Link } from 'react-router-dom'

function Mercury() {
  return (
    <div>
      <h1>MERCURY</h1>
      <p>Closest planet to the Sun, completing an orbit in just 88 days.</p>
      <ul>
        <li>Closest planet to the Sun, completing an orbit in just 88 days</li>
        <li>Smallest planet in the solar system, only slightly bigger than Earth's Moon</li>
        <li>No atmosphere to trap heat, so temperatures swing wildly: 430°C by day to -180°C at night</li>
        <li>Heavily cratered surface, similar in appearance to our Moon</li>
        <li>A day (sunrise to sunrise) lasts 176 Earth days — longer than its year!</li>
      </ul>
      <p>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  )
}

export default Mercury
