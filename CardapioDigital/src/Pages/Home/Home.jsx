import React from 'react'

//CSS
import styles from './Home.module.css'

//Components

//Bootstrap
import Carrousel from "../../Component/Carousel/Carrousel"
import Button from 'react-bootstrap/Button';


const Home = () => {
  return (
    <div>
      <Carrousel />
      <div className="container">
        <div className={styles.botoesPizzas}>
          <Button variant="warning" className={styles.botaoPizza}>Tradicionais</Button>{' '}
          <Button variant="warning" className={styles.botaoPizza}>Premiums</Button>{' '}
          <Button variant="warning" className={styles.botaoPizza}>Doces</Button>{' '}
          <Button variant="warning" className={styles.botaoPizza}>Bebidas</Button>{' '}
        </div>
      </div>
    </div>
  )
}

export default Home