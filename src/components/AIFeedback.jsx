
import React from "react";

export function AIFeedback({ code }) {
  const feedback = code.includes("print") ? "✅ Great job using print!" :
    code.trim() === "" ? "💡 Try writing some code first." :
    "⚠️ Remember to use Python syntax correctly.";

  return <div className="mt-2 text-sm text-gray-700 italic">{feedback}</div>;
}
