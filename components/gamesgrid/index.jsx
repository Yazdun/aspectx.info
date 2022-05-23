import { GamePrev } from 'components'
import css from './styles.module.css'
import cn from 'classnames'

export const GamesGrid = ({ games, loading }) => {
  return (
    <div className={cn(css.grid, loading && css.loading)}>
      {games?.map(game => {
        return <GamePrev key={game.id} game={game} />
      })}
    </div>
  )
}
