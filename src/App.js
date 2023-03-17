import { useState } from "react"
import Modal from './lib/components/Modal'
function App(){
    const [modal, setModal] = useState(false)
    function closeModal(){
        setModal(false)
    }
    return(
        <div className="App">
            <button onClick={()=> setModal(true)} >Save</button>
            {modal === true ?<Modal close={closeModal} message={'Employee Created'}></Modal>: null}
        </div>
    )
}

export default App