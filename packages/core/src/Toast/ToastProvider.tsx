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

export interface ToastProps {
  id: string;
  content: string;
}

export const ToastProvider = (props: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const open = (content: string) => {
    console.log(content)
    setToasts((currentToasts) => [
      ...currentToasts,
      { id: generateUEID(), content },
    ]);
  }

  const close = (id: string) =>
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );

  const contextValue = useMemo(() => ({ open }), []);

  console.log(contextValue, 'xx')

  return (
    <ToastContext.Provider value={contextValue}>
      {props.children}

      {createPortal(
        <div className="toasts-wrapper">
          {toasts.map((toast) => (
            <Toast key={toast.id} close={() => close(toast.id)}>
              {toast.content}
            </Toast>
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
};
