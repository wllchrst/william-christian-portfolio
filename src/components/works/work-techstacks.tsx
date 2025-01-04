import { useState } from "react";
import { IWork } from "../../interfaces/work-interface";

interface Props {
  work: IWork;
}

export default function WorkTechStacks({ work }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex gap-3 relative">
      {work.techStacks.map((techStack, index) => (
        <div
          key={index}
          className="relative flex items-center justify-center hover:cursor-help"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="text-2xl">{techStack.icon}</div>
          {hoveredIndex === index && (
            <div className="absolute bottom-full mb-2 bg-black text-white text-sm rounded-md p-3 shadow-lg whitespace-nowrap">
              {techStack.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
