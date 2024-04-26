"use client";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export default function Template({ children }: { children: React.ReactNode }) {
  const lenis = useLenis(({ scroll }) => {});

  return <ReactLenis root>{children}</ReactLenis>;
}
