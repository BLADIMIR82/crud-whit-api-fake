import React from "react";
import ReactPaginate from 'react-paginate';
import "../information/pages.css";

const Pages=({pageCount, handlePageClick})=>{
return(
 <div className="container-pages">
    <ReactPaginate
        breakLabel="..."
        breakClassName="break-class"
        nextLabel="Next"
        containerClassName="pagination"
        activeClassName="page-link-active"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
        />
 </div>
)
}
export default Pages;