import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{' '}
      <Link to="/mercury">Mercury</Link> |{' '}
      <Link to="/venus">Venus</Link> |{' '}
      <Link to="/earth">Earth</Link> |{' '}
      <Link to="/mars">Mars</Link> |{' '}
      <Link to="/jupiter">Jupiter</Link> |{' '}
      <Link to="/saturn">Saturn</Link> |{' '}
      <Link to="/uranus">Uranus</Link> |{' '}
      <Link to="/neptune">Neptune</Link> |{' '}
      <Link to="/moon">Moon</Link>
    </nav>
  )
}

export default Navbar
