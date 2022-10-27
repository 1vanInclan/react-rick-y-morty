

export const NavPage = ({page, setPage}) => {
  return (
    <nav className="navbar navbar-dark border border-secondary rounded-pill d-flex justify-content-between align-items-center pe-3 ps-3">
            {page==1 ?(
                <p>Page: {page}</p> 
                ):(
                    <button 
                        className="btn btn-sm btn-dark " 
                        onClick={() => setPage(page - 1)}
                    >
                       {`< Page ${page - 1}`} 
                    </button>
                ) 
            }
            <div className="badge bg-dark">{page}</div>
            {page==42 ? (
                <p>Page: {page}</p>
            ):(
                <button 
                    className="btn btn-sm btn-dark" 
                    onClick={() => setPage(page + 1)}>
                {`Page ${page + 1} >`} 
                </button>
            )}
            
    </nav>
  )
}
