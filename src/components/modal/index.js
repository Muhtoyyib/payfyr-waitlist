import './modal.styles.css';
// import { useEffect } from 'react';



const Modal = ( {modalState} ) => {
  // useEffect(() => {
  //   const successModal = document.getElementById('successModal');
  //   if (successModal) {
  //     successModal.classList.add('show');
  //     successModal.style.display = 'none';
  //   }
  // }, []);

  return (
    <div className='row d-flex align-items-center'>
      {modalState && <div className='modal fade' id="successModal" tabIndex="-1" role="dialog" aria-labelledby="successModalTitle" aria-hidden="true">
        <div className='modal-dialog modal-dialog-centered' role="document">
            <div className='modal-content sucessContent'>
            <div className='modal-body mt-3'>
                <h3 className='text-center modalH2'>Awesome! You’re on the waitlist.</h3>
                <p className='text-center pt-1 pb-1 modalP text-muted'>We can’t wait to bring you a convenient 
                and secure way to send and receive money across borders </p>
            </div>
            <div className='modal-footer'>
                <button type="button" className='btn btn-secondary
                mx-auto d-flex align-items-center 
                justify-content-center mt-n4 mb-3 w-75 modalButton' data-dismiss="modal">Done</button>
            </div>
            </div>
        </div>
        </div>}
    </div>
  )
}

export default Modal;
