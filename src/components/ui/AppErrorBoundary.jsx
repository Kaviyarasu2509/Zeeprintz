import { Component } from "react";

export default class AppErrorBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (!this.state.failed) return this.props.children;
    return <main style={{ padding: "100px 24px", maxWidth: 680, margin: "auto" }}>
      <h1>ZeePrintz</h1><p>We could not open this page. Please reload, or contact us for your printing order.</p>
      <p><a href="?reload=1">Reload website</a></p>
      <p><a href="tel:+917598951141">Call +91 75989 51141</a></p>
      <a href="https://wa.me/917598951141">Order on WhatsApp</a>
    </main>;
  }
}
