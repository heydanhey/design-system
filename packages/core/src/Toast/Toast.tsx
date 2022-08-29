import './style.css'

export interface ToastProps {
  close: () => void;
  children: React.ReactNode;
}

export const Toast = (props: ToastProps) => {
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
