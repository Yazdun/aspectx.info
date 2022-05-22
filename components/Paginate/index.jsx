import ReactPaginate from 'react-paginate'
import React, { useEffect, useState } from 'react'
import css from './index.module.css'
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md'
import { GrFormPrevious } from 'react-icons/gr'

const items = [...Array(33).keys()]

function Items({ currentItems }) {
  return (
    <div className={css.items}>
      {currentItems &&
        currentItems.map(item => (
          <div key={item}>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </div>
  )
}

export function PaginatedItems({ itemsPerPage }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage
    console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [itemOffset, itemsPerPage])

  // Invoke when user click to request another page.
  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    )
    setItemOffset(newOffset)
  }

  return (
    <>
      <Items currentItems={currentItems} />
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
