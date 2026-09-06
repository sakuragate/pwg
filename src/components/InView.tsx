"use client";

import {
  Children,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

function useInView<T extends HTMLElement>(threshold = 0.28) {
  const ref = useRef<T | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || on) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );

    io.observe(node);
    return () => io.disconnect();
  }, [on, threshold]);

  return { ref, on };
}

export function InView({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const { ref, on } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={className}
      data-inview={on ? "true" : "false"}
    >
      {children}
    </div>
  );
}

export function RevealLines({
  as: Tag = "h1",
  className,
  children,
}: {
  as?: "h1" | "h2";
  className?: string;
  children: ReactNode;
}) {
  const { ref, on } = useInView<HTMLHeadingElement>(0.2);
  const lines = Children.toArray(children);

  return (
    <Tag ref={ref} className={className} data-inview={on ? "true" : "false"}>
      {lines.map((line, index) => (
        <span key={index} className="reveal-stack-line">
          <span
            className="reveal-stack-inner"
            style={{ animationDelay: `${0.06 + index * 0.14}s` }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
