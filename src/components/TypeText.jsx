import { useEffect, useState } from "react";

function TextType({
  text = [],
  typingSpeed = 75,
  deletingSpeed = 50,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|",
  cursorBlinkDuration = 0.5,
}) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!text.length) return;

    const currentText = text[textIndex];

    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(
            currentText.substring(0, displayText.length + 1)
          );
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(
            currentText.substring(0, displayText.length - 1)
          );
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % text.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    text,
    textIndex,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className="inline-flex items-center">
      <span>{displayText}</span>

      {showCursor && (
        <span
          className="ml-1 inline-block"
          style={{
            animation: `textTypeCursor ${cursorBlinkDuration}s ease-in-out infinite`,
          }}
        >
          {cursorCharacter}
        </span>
      )}

      <style>{`
        @keyframes textTypeCursor {
          0%,
          50% {
            opacity: 1;
          }

          51%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </span>
  );
}

export default TextType;