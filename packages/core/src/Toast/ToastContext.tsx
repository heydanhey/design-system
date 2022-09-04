import { createContext } from 'react';

export interface ToastContextType {
  open: ({ content, autoDismissDelay }: { content: string, autoDismissDelay?: number }) => void;
}

export const ToastContext = createContext<ToastContextType | null>(null);
