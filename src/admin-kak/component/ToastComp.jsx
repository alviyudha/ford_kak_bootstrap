const ToastComp = ({ show, message, onClose }) => {
  return (
    <div
      className={`toast align-items-center text-bg-primary ${show ? 'show' : 'hide'}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-bs-autohide="false"
    >
      <div className="toast-header">
        <strong className="me-auto">Error</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
      <div className="toast-body">
        {message}
      </div>
    </div>
  );
};

export default ToastComp;
