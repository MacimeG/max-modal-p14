import { useState } from "react"
import Modal from './lib/components/Modal'
function App(){
    const [modal, setModal] = useState(false)
    function closeModal(){
        setModal(false)
    }
    return(
        <div className="App">
            <h1>hello a tous, parfait</h1>
            <button onClick={()=> setModal(true)} >Clique pour voir la modal</button>
            {modal === true ?<Modal close={closeModal} message={'Employee Created'}></Modal>: null}
        </div>
    )
}

export default App