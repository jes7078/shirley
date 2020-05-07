import React from 'react'
import '../components/fonts.scss'

const HomePage = () => {
  return (
    <div>
      <section className="fontSection">
        <h1 className="marck, deepSeaSpace">Shirley</h1>
        <h2 className="marck, deepSeaSpace">
          font-family: 'Marck Script', cursive
        </h2>
        <h2 className="marck, deepSeaSpace">Gradient: deepSeaSpace</h2>
      </section>
      <section className="fontSection">
        <h1 className="pinyon, deepSeaSpace">Shirley</h1>
        <h2 className="pinyon, deepSeaSpace">
          font-family: 'Marck Script', cursive
        </h2>
        <h2 className="pinyon, deepSeaSpace">Gradient: deepSeaSpace</h2>
      </section>
    </div>
  )
}

export default HomePage
