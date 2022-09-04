import React, { useState, useMemo } from 'react';
import { createPortal } from 'react-dom';

import { ToastContext } from './ToastContext';
import { Toast } from './Toast';

// Create a random ID
function generateUEID() {
  let first: string | number = (Math.random() * 46656) | 0;
  let second: string | number = (Math.random() * 46656) | 0;
  first = ('000' + first.toString(36)).slice(-3);
  second = ('000' + second.toString(36)).slice(-3);

  return first + second;
}

export interface ToastProviderProps {
  children: React.ReactNode;
}

interface ToastProps {
  content: string;
  id: string;
  autoDismissDelay: number;
}

export const ToastProvider = (props: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const open = ({ content, autoDismissDelay }: { content: string, autoDismissDelay?: number }) => {
    setToasts((currentToasts) => [
      ...currentToasts,
      {
        id: generateUEID(),
        content,
        autoDismissDelay: autoDismissDelay || 0
      },
    ]);
  }

  const close = (id: string) =>
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );

  const contextValue = useMemo(() => ({ open }), []);

  return (
    <ToastContext.Provider value={contextValue}>
      {props.children}

      {createPortal(
        <div className="toasts-wrapper">
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              close={() => close(toast.id)}
              autoDismissDelay={toast.autoDismissDelay}
            >
              {toast.content}
            </Toast>
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};
