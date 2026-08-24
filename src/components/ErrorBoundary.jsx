import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(
      "Application Error Boundary caught an error:",
      error,
      errorInfo,
    );
  }

  handleReload = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: "80px 24px",
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "26px",
              marginBottom: "16px",
              color: "var(--ink)",
            }}
          >
            Something went wrong
          </h2>
          <p
            style={{
              color: "var(--steel)",
              marginBottom: "24px",
              lineHeight: "1.6",
            }}
          >
            We encountered an unexpected issue while loading this page. Please
            try refreshing.
          </p>
          <button
            onClick={this.handleReload}
            className="btn btn-copper"
            style={{ display: "inline-flex", margin: "0 auto" }}
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
