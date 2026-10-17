import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#090B0D] text-[#F5F4F0] flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md bg-[#15191D] border border-[#242A30] p-8 rounded-sm shadow-2xl">
            <h1 className="text-xl font-bold font-serif-brand text-[#BCA77A] mb-3 uppercase tracking-wider">
              ABSIM AUTOMOTIVE
            </h1>
            <h2 className="text-lg font-semibold text-[#F5F4F0] mb-2">
              Something went wrong loading this view
            </h2>
            <p className="text-xs text-[#C4C9CE] mb-6">
              {this.state.error?.message || 'An unexpected error occurred while rendering the page.'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 bg-[#BCA77A] hover:bg-[#d1bd93] text-[#090B0D] font-semibold text-xs tracking-wider uppercase rounded-sm transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
