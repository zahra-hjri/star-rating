import { useState } from "react";

const TextExpanded = ({
  collapseNumWords = 10,
  children,
  className,
  expandBtnText = "Show more",
  collapseText = "Show Less",
  color = "blue",
  expanded = false,
}) => {
  const [expandText, setExpandText] = useState(expanded);

  const displayText = expandText
    ? children
    : children.split(" ").slice(0, collapseNumWords).join(" ") + "...";

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button
        style={{ color: ` ${color}` }}
        onClick={() => setExpandText((exp) => !exp)}
      >
        {expandText ? collapseText : expandBtnText}
      </button>
    </div>
  );
};

export default TextExpanded;
