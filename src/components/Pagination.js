import React from 'react'

export default function Pagination({totalPages ,postsPerPage,paginate}) {
    const pageNumber  = []
    for(let i=1 ;i<=Math.ceil(totalPages / postsPerPage);i++){
        pageNumber.push(i)
    }
    return (
        <nav className="pagination">
            <ul className="pagination">
                {
                    pageNumber.map(number=>(
                        <li key = {number} className="page-item"><a  onClick={()=>paginate(number)} className="page-link" href="#">{number}</a></li>

                    ))
                }
   
  </ul>

        </nav>
    )
}
