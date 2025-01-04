import { useState } from "react";
import { IGuide } from "../../interfaces/guide-interface";
import { IoClose } from "react-icons/io5";

const guideList: IGuide[] = [
  {
    isClosing: false,
    isShowing: true,
    description:
      "Hover the icons beside the work title to find out what is the technology for",
  },
  {
    isClosing: false,
    isShowing: true,
    description: "You can click the images to preview the works",
  },
];

export default function WorkGuide() {
  const [guides, setGuides] = useState(guideList);

  function closeHandle(index: number) {
    // Set `isShowing` to false after a short delay for the animation
    setGuides((prevGuides) =>
      prevGuides.map((guide, i) =>
        i === index ? { ...guide, isClosing: true } : guide
      )
    );
    setTimeout(() => {
      setGuides((prevGuides) =>
        prevGuides.map((guide, i) =>
          i === index ? { ...guide, isShowing: false, isClosing: false } : guide
        )
      );
    }, 300); // Match the duration of the animation
  }

  return (
    <div className="p-2 fixed right-0 bottom-0 z-50">
      <div className="flex flex-col items-end gap-2">
        {guides.map((guide, index) => (
          <>
            {guide.isShowing && (
              <div
                className={`bg-black p-3 z-50 shadow-lg text-white rounded-md relative flex items-center gap-2 transition-all duration-300 ${
                  guide.isClosing ? "opacity-0 translate-y-4" : "opacity-100"
                }`}
                key={index}
                style={{
                  minWidth: "200px", // Optional: Set a minimum width
                  width: "auto", // Allow content to dictate width
                  maxWidth: "800px", // Optional: Limit the maximum width
                }}
              >
                <p className="whitespace-normal break-words">
                  {guide.description}
                </p>
                <div
                  className="hover:cursor-pointer"
                  onClick={() => closeHandle(index)}
                >
                  <IoClose />
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
