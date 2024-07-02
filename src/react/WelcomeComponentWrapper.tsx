import React, { useLayoutEffect, useRef } from 'react';
import '../dom/welcome-component';

interface WelcomeComponentWrapperProps {
  message?: string;
}

declare global {
  namespace JSX {
      interface IntrinsicElements {
          'welcome-component': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
  }
}

export const WelcomeComponentWrapper = (
  { message }: WelcomeComponentWrapperProps
) => {
  const webComponentRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (message) {
      webComponentRef?.current?.setAttribute('message', message);
    }
  }, []);

  return <welcome-component ref={webComponentRef}></welcome-component>;
};

