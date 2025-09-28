import type { ReactElement } from "react";

interface CardProps {
  title: string;
  children: ReactElement
}

export default function Card(props: CardProps) {
  return (
    <div className="w-screen mx-4 bg-cyan-800 border-3 border-cyan-400 rounded-2xl overflow-auto">
      <h1 className="p-2 text-center text-1xl font-bold underline border-b-2 border-cyan-400">
        {props.title}
      </h1>
      {props.children}
    </div>
  )
}
