import ReactPaginate from 'react-paginate'
import React, { useEffect, useState } from 'react'
import css from './index.module.css'
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md'
import { Filter, GamesGrid } from 'components'

export function PaginatedGames({ itemsPerPage, initial }) {
  const [data, setData] = useState(null || initial)
  const { count, results, next, previous } = data
  const [loading, setLoading] = useState(false)
  const [force, setForce] = useState(0)

  // We start with an empty list of items.
  const [pageCount, setPageCount] = useState(0)

  const fetchPage = async (page, selectedGenre) => {
    setLoading(true)
    selectedGenre && setForce(0)
    fetch(
      next
        ? next +
            `&page=${page + 1}${
              selectedGenre ? `&genres=${selectedGenre}` : ''
            }`
        : previous +
            `&page=${page + 1}${
              selectedGenre ? `&genres=${selectedGenre}` : ''
            }`,
    )
      .then(res => res.json())
      .then(json => {
        setLoading(false)
        setData(json)
      })
  }

  useEffect(() => {
    setPageCount(Math.ceil(count / itemsPerPage))
  }, [itemsPerPage, count])

  // Invoke when user click to request another page.
  const handlePageClick = event => {
    if (typeof window === 'object')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    fetchPage(event.selected)
    setForce(event.selected)
  }

  return (
    <>
      <Filter fetchGenres={fetchPage} />
      <div className={css.items}>
        <GamesGrid games={results} loading={loading} />
      </div>
      <ReactPaginate
        nextLabel={<MdOutlineNavigateNext />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel={<MdOutlineNavigateBefore />}
        pageClassName={css.pageItem}
        pageLinkClassName={css.pageLink}
        previousLinkClassName={css.icon}
        nextLinkClassName={css.icon}
        breakLabel="..."
        breakClassName={css.break}
        breakLinkClassName={css.pageLink}
        containerClassName={css.pagination}
        activeClassName={css.active}
        renderOnZeroPageCount={null}
        forcePage={force}
      />
    </>
  )
}
