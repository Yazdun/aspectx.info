import ReactPaginate from 'react-paginate'
import React, { useEffect, useState } from 'react'
import css from './index.module.css'
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md'
import { GamesGrid } from 'components'

export function PaginatedItems({ itemsPerPage, initial }) {
  const [data, setData] = useState(null || initial)
  const { count, results, next, previous } = data
  const [loading, setLoading] = useState(false)

  // We start with an empty list of items.
  const [pageCount, setPageCount] = useState(0)
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)

  const fetchPage = async page => {
    setLoading(true)
    fetch(next ? next + `&page=${page + 1}` : previous + `&page=${page + 1}`)
      .then(res => res.json())
      .then(json => {
        setLoading(false)
        setData(json)
      })

    // const json = await res.json()
    // setData(json)
  }

  useEffect(() => {
    setPageCount(Math.ceil(count / itemsPerPage))
  }, [itemOffset, itemsPerPage, count])

  // Invoke when user click to request another page.
  const handlePageClick = event => {
    if (typeof window === 'object')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    const newOffset = (event.selected * itemsPerPage) % 12
    fetchPage(event.selected)
    setItemOffset(newOffset)
  }

  return (
    <>
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
      />
    </>
  )
}
