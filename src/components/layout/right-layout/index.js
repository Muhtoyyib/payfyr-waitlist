import './rightLayout.styles.css';
import  BellIcon from './bell.png';

const RightLayout = () => {
  return (
    <div className='col-12 col-lg-5 col-md-6 offset-lg-1 mt-lg-5 mt-5'>

        <div className='card overflow-hidden p-2'>
          <div className='jumbotron w-100'>
              <div className='row'>
                  <div className='col-8'>
                    <h1 className='rightH1'>Get Notified</h1>
                  </div>

                  <div className='col-4 col-lg-4 '>
                    <img src={BellIcon} alt="Bell_Icon" className='img-fluid float-right w-50' />
                  </div>
              </div>
          </div>

          <div className='px-2 mt-lg-4'>
            <form>
                <div className='form-group mt-lg-1'>
                    <input className='mail-input w-100 border-0' type="email" placeholder="Email address" />
                    <small className='form-text text-muted'>{}</small>
                </div>

                <div className='d-flex align-items-center'>
                  <button type="button" class=" text-light text-center mx-auto mt-3 mb-2 submit border-0" data-toggle="modal" data-target="#successModal">Notify me</button>
                </div>
            </form>
          </div>
        </div>

    </div>
  )
}

export default RightLayout;
