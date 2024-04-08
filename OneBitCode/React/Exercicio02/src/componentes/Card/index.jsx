import Button from '../Button'
import styles from './styles.module.css'

export default function Card(props){
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={props.posterImg} alt={props.title} />
            <div>
                <h2>{props.title}</h2>
                <p>Um poster decorativo épico do filme star wars com moldura de MDF e tamanho A3. Uma otima recordação de um dos mais iconicos filmes de todos os tempos. Ese classico poster trara uma aventura nostalgica e a magia de Stars Wars para qualquer lugar que vocêdecidir pendurar. Não perca a chance de adicionar essa linda memoria ao seu acervo</p>

                <Button />
            </div>

        </div>
    )
}