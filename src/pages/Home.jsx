import { useNavigate, Link } from 'react-router-dom'

// Approximate positions of each planet in solar-system.jpg (1200 x 675),
// expressed as percentages so the clickable areas scale with the image.
const planetSpots = [
  { name: 'Mercury', path: '/mercury', left: '29.4%', top: '51.1%', width: '3%', height: '5%' },
  { name: 'Venus', path: '/venus', left: '34.4%', top: '51.1%', width: '4%', height: '7%' },
  { name: 'Earth', path: '/earth', left: '40%', top: '51.1%', width: '4.3%', height: '7.5%' },
  { name: 'Mars', path: '/mars', left: '44.8%', top: '51.1%', width: '3%', height: '5.5%' },
  { name: 'Jupiter', path: '/jupiter', left: '55.8%', top: '51.1%', width: '16%', height: '28%' },
  { name: 'Saturn', path: '/saturn', left: '74.6%', top: '51.9%', width: '15%', height: '27%' },
  { name: 'Uranus', path: '/uranus', left: '86.3%', top: '51.1%', width: '9%', height: '16%' },
  { name: 'Neptune', path: '/neptune', left: '95.8%', top: '51.1%', width: '9%', height: '16%' },
]

function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>GRAHA</h1>
      <p>GRAHA — Explore the Solar System</p>

      <div className="solar-system-container">
        <img
          src="/solar-system.jpg"
          alt="Solar System"
          className="solar-system-image"
        />

        {planetSpots.map((planet) => (
          <button
            key={planet.name}
            className="planet-hotspot"
            style={{
              left: planet.left,
              top: planet.top,
              width: planet.width,
              height: planet.height,
            }}
            onClick={() => navigate(planet.path)}
            aria-label={planet.name}
          ></button>
        ))}
      </div>

      <p>
        <Link to="/moon">Explore the Moon</Link>
      </p>
    </div>
  )
}

export default Home
