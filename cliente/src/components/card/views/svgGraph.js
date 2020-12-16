const GraphSvg = ({ points }) => {
  return (
    <svg
      id='graphContainer'
      width='255.751px'
      height='221.5px'
      viewBox='0 0 255.751 221.5'
      enable-background='new 0 0 511.544 443.01'
      style={{ marginTop: '18px' }}
    >
      <def>
        <radialGradient id='RadialGradient1'>
          <stop offset='20%' stop-color='rgba(100,180,280,0.6' />
          <stop offset='120%' stop-color='rgba(0,10,50,0.5' />
        </radialGradient>
      </def>
      <polygon
        fill='url(#RadialGradient1)'
        stroke='#cdcdcd'
        stroke-width='1.5'
        stroke-miterlimit='10'
        points={points}
      />
    </svg>
  )
}
export default GraphSvg
