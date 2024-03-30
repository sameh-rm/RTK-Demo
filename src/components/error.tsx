import React, { Component, ErrorInfo, ReactNode } from 'react';
import Link from 'next/link';
import logger from '@/utils/logger';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  message?: string;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true, message: _.message };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // TODO: check required data before send to the backend
    const componentStack = errorInfo.componentStack!.trim();
    const errorGroups = Array.from(
      componentStack
        .replace(/(\t|\n|\r)/gm, '')
        .matchAll(/at\s(?<component>\w+)\s(?<stack>.*)/gm)
    )?.at(0)?.groups;
    const message = {
      message: error.message,
      component: errorGroups?.component,
      error: errorGroups?.stack
    };

    // TODO: create environment variable for api url
    // sendBeacon(`http://localhost:3000/api/log`, message);
    logger.error(message);
  }

  public render() {
    if (this.state.hasError) {
      // TODO: add error page
      return (
        <div className="flex flex-col items-center justify-center h-screen">
          <p className="text-gray-700 mb-8">{this.state.message}</p>
          <Link href="/">Go back to the homepage</Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
