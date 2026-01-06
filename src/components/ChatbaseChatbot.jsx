import { useEffect } from "react";

export default function ChatbaseChatbot() {
  useEffect(() => {
    // Avoid loading twice
    if (window.chatbase) return;

    // Initialize chatbase proxy
    window.chatbase = (...args) => {
      if (!window.chatbase.q) {
        window.chatbase.q = [];
      }
      window.chatbase.q.push(args);
    };

    window.chatbase = new Proxy(window.chatbase, {
      get(target, prop) {
        if (prop === "q") return target.q;
        return (...args) => target(prop, ...args);
      },
    });

    // Load embed script
    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "NPr_PmrTGZJ1wy-E5KHM2";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
