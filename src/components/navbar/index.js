import './navbar.styles.css';

const Navbar = () => {
  return (
    <div>

        <nav className='navbar navbar-expand-md navbar-dark'>
            <h2 className='navbar-brand d-flex logo' href="mailto:akandeolalekantoheeb94@gmail.com">Payfyr</h2>
        
            <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className='navbar-toggler-icon d-flex justify-content-end' data-toggle="modal" data-target="#collapsibleNavbar"></span>   
            </button>

        
            <div className='collapse navbar-collapse d-lg-flex justify-content-lg-end mr-2 mx-auto mb-3'>
                <ul className='navbar-nav'>
                    <a className='btn btn-light' href="mailto:akandeolalekantoheeb94@gmail.com" role="button">Contact US</a>
                </ul>
            </div>
        </nav>

        <div class="modal mt-2" tabindex="-1" id="collapsibleNavbar" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content mt-5">
                    
                        <button type="button" class="close d-flex justify-content-end mr-2 mt-2 mb-2 " data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                        </button>

                    <div class="modal-body mt-n4 mb-5 w-75 mx-auto">
                        <ul className='navbar-nav'>
                        <a className='btn btn-primary nav-button' href="mailto:akandeolalekantoheeb94@gmail.com" role="button">Contact US</a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar;
