function ModalConf({ show, onClose, onConfirm, type }) {
  const actionText = type === "delete" ? "Delete" : "Confirm";

  return (
    <div
      className={`modal ${show ? "d-block" : "d-none"}`}
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirm {type}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to {type} this data?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className={`btn btn-${type === "delete" ? "danger" : "primary"}`}
              onClick={onConfirm}
            >
              {actionText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalConf;
