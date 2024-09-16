import "./Modal.css";

const Modal = ({ closeModal })=>{
    return(
        <div className='modalbg'>

            <div className="modalcontainer">

                <div className="title">
                <span className="titlespan">
                <button onClick={()=>{
                    closeModal(false);
                }}
                
                className='titleclosebtn'

                >
                    X
                </button>
                </span>
                    <h1 className="modaltitle">Modal Opened!!</h1>
                </div>

                <div className="body">
                    <p>This is Modal Body, Continue for further action and cancel for back!!</p>
                </div>

                <div className="footer">
                    <button onClick={()=>{
                        closeModal(false);
                    }} className='btn closebtn'>Cancel</button>
                    <button className='btn openbtn'>Continue</button>
                </div>

            </div>

        </div>
    )
};

export default Modal