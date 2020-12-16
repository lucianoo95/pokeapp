import Particles from 'react-particles-js'

const Bubbles = ({ height }) => {
  return (
    <Particles
      style={{
        color: 'rgba(100,100,255,0.7)',
        border: 'solid 2px #9999ff',
        backgroundColor: 'rgba(10,10,180,0.3)'
      }}
      height={height}
      width={height}
      params={{
        particles: {
          number: {
            value: 360,
            density: {
              enable: false
            }
          },
          collisions: {
            enable: true
          },

          size: {
            value: 5,
            random: true,
            anim: {
              speed: 5,
              size_min: 0.5
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            random: true,
            speed: 2,
            direction: 'top',
            out_mode: 'out'
          }
        }
      }}
    />
  )
}
export default Bubbles
