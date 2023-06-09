import './navbar.styles.css';

const Navbar = () => {
  return (
    <div>

       
        <nav className='navbar navbar-expand-md navbar-dark'>
            <h2 className='navbar-brand d-flex logo' href="mailto:akandeolalekantoheeb94@gmail.com">Payfyr</h2>
        
            <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className='navbar-toggler-icon' data-toggle="modal" data-target="#collapsibleNavbar"></span>   
            </button>

        
            <div className='collapse navbar-collapse d-lg-flex justify-content-lg-end justify-content-md-end mr-2 mx-auto mb-3'>
                <ul className='navbar-nav'>
                    <a className='btn btn-light nav-button' href="mailto:akandeolalekantoheeb94@gmail.com" role="button">Contact US</a>
                </ul>
            </div>
        </nav>

        <div className="modal mt-2" tabIndex="-1" id="collapsibleNavbar" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content mt-5">
                    
                        <button type="button" className="close d-flex justify-content-end mr-2 mt-2 mb-2 " data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                        </button>

                    <div className="modal-body mt-n5 py-4 w-75 mx-auto">
                        <ul className='navbar-nav'>
                        <a className='btn text-light nav-button-mobile' href="mailto:akandeolalekantoheeb94@gmail.com" role="button">Contact US</a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar;
