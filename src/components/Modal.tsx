interface IModalProps {
    setShowModal : (show: boolean) => void;
    ModalMsg: string;
}
const Modal = (props: IModalProps) => {
  return (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <p className="py-4">{props.ModalMsg}</p>
            <div className="modal-action">
              <button 
                className="btn" 
                onClick={() => props.setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={() => props.setShowModal(false)}>close</button>
          </form>
        </dialog>
  
);
};
export default Modal
