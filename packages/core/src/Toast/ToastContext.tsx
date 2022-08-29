import { createContext } from 'react';

export interface ToastContextType {
  open: (content: string) => void;
}

export const ToastContext = createContext<ToastContextType | null>(null);
