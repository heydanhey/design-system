import { useEffect } from 'react';
import './style.css'

export interface ToastProps {
  close: () => void;
  children: React.ReactNode;
  autoDismissDelay?: number;
}

export const Toast = (props: ToastProps) => {

  function setAutoDismiss() {
    if (props.autoDismissDelay) {
      setTimeout(() => {
        props.close()
      }, props.autoDismissDelay)
    }
  }

  useEffect(() => {
    setAutoDismiss();
  });

  return (
    <div className="toast">
      <div className="toast__text">{props.children}</div>
      <div>
        <button onClick={props.close} className="toast__close-btn">
          x
        </button>
      </div>
    </div>
  );
};

Toast.displayName = "Toast";
