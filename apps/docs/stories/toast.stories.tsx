import React from 'react';
import { ToastProvider, useToast, Toast } from "@heydan/core/src";

const options = {
  title: 'Toast',
  component: Toast,
};

export default options;

function ToastExample() {
  const toast = useToast();

  const showToast = () => {
    toast?.open({
      content: `Toast created from child component! ${Math.random() * 2332}`,
      autoDismissDelay: 3000
    })
  }

  return <button onClick={showToast}>Show Toast</button>
}

export const Default = () => {
  return (
    <ToastProvider>
      <ToastExample />
    </ToastProvider>
  );
};
