import type { ReactElement } from "react";

export interface CardProps {
  title: string;
  children: ReactElement
}

export default function Card(props: CardProps) {
  return (
    <div className="bg-cyan-900 border-3 border-cyan-600 rounded-2xl overflow-auto">
      <h1 className="p-2 text-center text-1xl font-bold underline border-b-2 border-cyan-500">
        {props.title}
      </h1>
      {props.children}
    </div>
  )
}
