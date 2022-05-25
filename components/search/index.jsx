import css from './styles.module.css'
import { FiSearch } from 'react-icons/fi'
import { ImSpinner2 } from 'react-icons/im'
import { useState, useRef } from 'react'
import { Container } from 'components'
import { useOnClickOutside } from 'hooks'
import { AnimatePresence, motion } from 'framer-motion'
import { RAWG_SEARCH } from 'services'
import Link from 'next/link'
import { FaLongArrowAltRight } from 'react-icons/fa'

export const Search = () => {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])
  const [noResult, setNoResult] = useState(false)
  const [timer, setTimer] = useState(null)
  const ref = useRef()

  const callApi = async () => {
    fetch(RAWG_SEARCH(inputValue))
      .then(res => res.json())
      .then(json => {
        setResults(json.results)
        setNoResult(json.count === 0 ? true : false)
        setLoading(false)
      })
  }

  const inputChanged = e => {
    setInputValue(e.target.value)

    e.target.value && setLoading(true)
    e.target.value === '' && setResults([])
    e.target.value === '' && setNoResult(false)
    e.target.value === '' && setLoading(false)

    clearTimeout(timer)

    const newTimer = setTimeout(() => {
      e.target.value && callApi()
    }, 1000)

    setTimer(newTimer)
  }

  useOnClickOutside(ref, () => setOpen(false))

  return (
    <div className={css.wrapper} ref={ref}>
      <button className={css.cta} onClick={() => setOpen(prev => !prev)}>
        <FiSearch />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className={css.search}
            initial={{
              y: '-100%',
            }}
            animate={{
              y: 0,
            }}
            exit={{
              y: '-100%',
            }}
            transition={{ duration: 0.4 }}
          >
            <Container>
              <div className={css.searchTerm}>
                <div className={css.icon}>
                  {loading ? (
                    <ImSpinner2 className={css.loading} />
                  ) : (
                    <FiSearch />
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Start typing ..."
                  className={css.input}
                  onChange={inputChanged}
                />
              </div>
              {results.map(game => {
                return (
                  <Link href={`/games/${game.slug}`} key={game.id}>
                    <a className={css.result} onClick={() => setOpen(false)}>
                      <FaLongArrowAltRight />
                      {game.name}
                    </a>
                  </Link>
                )
              })}
              {noResult && (
                <p className={css.error}>
                  There were no results for your searched term
                </p>
              )}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
