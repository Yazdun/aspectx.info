import { GamePrev } from 'components'
import css from './styles.module.css'

export const GamesGrid = ({ games }) => {
  return (
    <div className={css.grid}>
      {games.map(game => {
        return <GamePrev key={game.id} game={game} />
      })}
    </div>
  )
}
