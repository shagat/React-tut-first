import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
function Todo(props) {
  const [modalOpen, modalSet] = useState(false);
  function deleteHandler() {
    modalSet(true);
  }
  function closeModalHandler() {
    modalSet(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}
export default Todo;
