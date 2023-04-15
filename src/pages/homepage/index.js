import Navbar from "../../components/navbar";
import LeftLayout from "../../components/layout/left-layout";
import RightLayout from "../../components/layout/right-layout";
import Modal from "../../components/modal";

const Homepage = () => {

  return (
    <div className='container h-100 mt-lg-3'>
      <header>
       <Navbar/>
      </header>

      <main>
        <div className='row mt-lg-5 pt-lg-5 mt-5 d-flex align-items-center justify-content-center'>
           <LeftLayout />
           <RightLayout />
        </div>
      </main>

      <Modal />

      
    </div>
  )
}

export default Homepage;
