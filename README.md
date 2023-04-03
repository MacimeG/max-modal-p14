# Installation

you can install max-modal-component with npm :
`npm i max-modal-component`

# Usage

In react app, use : `import {Modal} from 'max-modal-component'`
and use : `<Modal close={Function} message={"your message"}>`

you can use this modal for form validation

# props

| Name          | Type              | Description                                         |
| --------------| -----------       | -----------                                         |
| props         | String or Boolean | props for modal                                     |
| message       | String            | props for show/change the message inside the modal  |
| close         | Boolean           | props for close the modal                           |


# example

```
import { Modal } from "max-modal-component" 
import { useState } from "react"

function Component(){
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

export default Component
```