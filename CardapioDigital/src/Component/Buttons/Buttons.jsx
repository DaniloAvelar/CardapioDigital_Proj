import React from 'react'

//CSS
import styles from "./Buttons.module.css"

//Bootstrap
import Button from 'react-bootstrap/Button';

const Buttons = (props) => {
    
    return (
        <div>
            <div className={styles.botoesPizzas}>
                <Button
                    variant="warning"
                    className={styles.botaoPizza}
                    onClick={()=> props.setPage(1)}
                >
                    <h5>
                        <span className="material-symbols-outlined">
                            local_pizza
                        </span>
                        <b> Tradicionais</b>

                    </h5>
                </Button>{' '}
                <Button
                    variant="warning"
                    to="/premium"
                    className={styles.botaoPizza}
                    onClick={()=> props.setPage(2)}
                >
                    <h5>
                        <span className="material-symbols-outlined">
                            workspace_premium
                        </span>
                        <b> Premium</b>

                    </h5>
                </Button>{' '}
                <Button
                    variant="warning"
                    to="/sweet"
                    className={styles.botaoPizza}
                    onClick={()=> props.setPage(3)}
                >
                    <h5>
                        <span className="material-symbols-outlined">
                            icecream
                        </span>
                        <b> Doces</b>
                    </h5>

                </Button>{' '}
                <Button
                    variant="warning"
                    to="/drink"
                    className={styles.botaoPizza}
                    onClick={()=> props.setPage(4)}
                >
                    <h5>
                        <span className="material-symbols-outlined">
                            liquor
                        </span>
                        <b> Bebidas</b>

                    </h5>

                </Button>{' '}
            </div>
        </div>
    )
}

export default Buttons