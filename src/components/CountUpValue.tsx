import { useCountUp } from "../hooks/useMotion";

interface CountUpValueProps {
  text: string;
}

/** Animates leading integers/decimals on scroll while leaving non-numeric labels untouched. */
export function CountUpValue({ text }: CountUpValueProps) {
  const match = /^(\d+(?:\.\d+)?)(.*)$/.exec(text.trim());
  const numericTarget = match ? Number(match[1]) : 0;
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;
  const suffix = match ? match[2] : "";

  const [ref, animated] = useCountUp<HTMLSpanElement>(numericTarget);

  if (!match) {
    return <span>{text}</span>;
  }

  const formatted =
    decimals > 0 ? animated.toFixed(decimals) : Math.round(animated).toLocaleString();

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}
