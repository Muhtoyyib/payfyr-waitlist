import Navbar from "../../components/navbar";
import { useState} from "react";
import LeftLayout from "../../components/layout/left-layout";
import RightLayout from "../../components/layout/right-layout";
import Modal from "../../components/modal";
import { emailRegex } from "../../helpers/regex";

const Homepage = () => {

  const [modalState, setModalState] = useState(false);
  const [emailResponse, setEmailResponse] = useState('')
  const [input, setInput] = useState('')
  
  const handleValidation = (e) => {
    e.preventDefault()
    if(input.length >= 1){
      
      if(!emailRegex.test(input)){
        console.log('incorrect email')
        setModalState(false);
        setEmailResponse('Sorry, the email you enter is incorrect')

      } else {
        //API FOR SEND GRID GOES HERE
        // if api call is successful, display modal
        console.log('changes modalState')
        setModalState(true);
        setEmailResponse('')
      }
    } else {
      console.log('empty inputbox')
      setEmailResponse('Please enter your email address')
    }
  }

  const onChange =(e) => {setInput(e.target.value)}

  return (
    <div className='container h-100 mt-lg-3'>
      <header>
       <Navbar/>
      </header>

      <main>
        <div className='row mt-lg-5 pt-lg-5 mt-5 d-flex align-items-center justify-content-center'>
           <LeftLayout />
           <RightLayout handleValidation={handleValidation} emailResponse={emailResponse} onChange={onChange} />
        </div>
      </main>

     <Modal modalState={modalState}/>

      
    </div>
  )
}

export default Homepage;
