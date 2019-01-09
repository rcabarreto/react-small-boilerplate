import React from 'react'

const OtherComponent = () => {
  console.log('renderizei de novo o OtherComponent')
  return (
    <p>I&lsquo;m another component!</p>
  )
}

export default React.memo(OtherComponent)
