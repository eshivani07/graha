import { Link } from 'react-router-dom'

function Mars() {
  return (
    <div>
      <h1>MARS</h1>
      <p>Known as the "Red Planet" due to iron oxide (rust) on its surface.</p>
      <ul>
        <li>Known as the "Red Planet" due to iron oxide (rust) on its surface</li>
        <li>Home to Olympus Mons, the largest volcano in the solar system</li>
        <li>Has two small moons: Phobos and Deimos</li>
        <li>Evidence suggests it once had liquid water and could have supported microbial life</li>
        <li>Prime target for future human exploration and colonization</li>
      </ul>
      <p>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  )
}

export default Mars
