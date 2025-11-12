import { useState } from "react";

interface NotesProps {
  text: string;
}

export const Notes = ({ text }: NotesProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <button 
        className="text-purple-200 underline hover:cursor-pointer hover:text-purple-400"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'read less about this horse' : 'read more about this horse'}
      </button>
    
      {expanded && (
        <p className="max-w-2xl text-center">
          {text}
        </p>
      )}
    </>
  )
}