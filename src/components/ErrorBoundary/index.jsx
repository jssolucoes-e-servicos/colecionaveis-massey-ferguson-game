import React from "react";
import Translator from "@/components/I18n/Translator";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("ErrorBoundary");
    console.error("error: " + error);
    console.error("errorInfo: " + errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <p>
          <Translator path="errors.boundary" />.
        </p>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
