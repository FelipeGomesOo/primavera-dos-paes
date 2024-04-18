"use client";
import parse from "html-react-parser";
export default function Description({ description }: { description: string }) {
  return <div>{parse(description)}</div>;
}
