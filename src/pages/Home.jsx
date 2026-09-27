import { Link } from 'react-router-dom'

const planets = [
  { name: 'Mercury', path: '/mercury', image: '/assets/planets/mercury.png', size: 'clamp(20px, 3vw, 40px)' },
  { name: 'Venus', path: '/venus', image: '/assets/planets/venus.png', size: 'clamp(28px, 4vw, 55px)' },
  { name: 'Earth', path: '/earth', image: '/assets/planets/earth.png', size: 'clamp(30px, 4.5vw, 60px)' },
  { name: 'Mars', path: '/mars', image: '/assets/planets/mars.png', size: 'clamp(24px, 3.5vw, 45px)' },
  { name: 'Jupiter', path: '/jupiter', image: '/assets/planets/jupiter.png', size: 'clamp(70px, 9vw, 130px)' },
  { name: 'Saturn', path: '/saturn', image: '/assets/planets/saturn.png', size: 'clamp(65px, 8.5vw, 120px)' },
  { name: 'Uranus', path: '/uranus', image: '/assets/planets/uranus.png', size: 'clamp(45px, 6vw, 85px)' },
  { name: 'Neptune', path: '/neptune', image: '/assets/planets/neptune.png', size: 'clamp(45px, 6vw, 85px)' },
]

function Home() {
  return (
    <div>
      <h1>GRAHA</h1>
      <p>GRAHA — Explore the Solar System</p>

      <div className="solar-system">
        <img
          src="/assets/planets/sun.png"
          alt="Sun"
          className="sun-image"
        />

        {planets.map((planet) => (
          <Link
            key={planet.name}
            to={planet.path}
            className="planet-link"
            aria-label={planet.name}
          >
            <img
              src={planet.image}
              alt={planet.name}
              className="planet-image"
              style={{ width: planet.size }}
            />
          </Link>
        ))}
      </div>

      <p>
        <Link to="/moon">Explore the Moon</Link>
      </p>
    </div>
  )
}

export default Home