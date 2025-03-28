import { useEffect, useState } from "react";

export const TypeWriter = ({
  text = "",
  speed = 70,
}: {
  text?: string;
  speed?: number;
}) => {
  const safeText = typeof text === "string" ? text : String(text ?? "");
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (index < safeText.length) {
      const timeout = setTimeout(() => {
        setDisplay((prev) => prev + safeText[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, safeText, speed]);

  return <span>{display}</span>;
};
