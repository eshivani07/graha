import { Link } from 'react-router-dom'

function Moon() {
  return (
    <div>
      <h1>THE MOON</h1>
      <ul>
        <li>Earth's only natural satellite, formed ~4.5 billion years ago — likely from debris after a Mars-sized object (Theia) collided with early Earth</li>
        <li>NASA's Apollo missions (1969–1972) brought back 382 kg of lunar rock and soil, proving the Moon and Earth share similar composition, supporting the giant-impact theory</li>
        <li>Confirmed water ice exists in permanently shadowed craters near the lunar poles — a major discovery for future human bases (potential drinking water, oxygen, and rocket fuel)</li>
        <li>The Moon is slowly drifting away from Earth at about 3.8 cm per year, measured using laser reflectors left behind by Apollo astronauts</li>
        <li>It's tidally locked to Earth, so we always see the same side — the "far side" was only photographed for the first time in 1959</li>
        <li>NASA's LRO (Lunar Reconnaissance Orbiter) has mapped the surface in stunning detail, even spotting the Apollo landing sites and equipment left behind</li>
        <li>Moonquakes are real — seismometers placed by Apollo astronauts detected them, some lasting over 10 minutes due to the Moon's dry, rigid interior</li>
        <li>NASA's Artemis program aims to return humans to the Moon, including the first woman and person of color, targeting a sustainable lunar presence for future Mars missions</li>
      </ul>
      <p>
        <Link to="/">← Back to Home</Link>
      </p>
    </div>
  )
}

export default Moon
