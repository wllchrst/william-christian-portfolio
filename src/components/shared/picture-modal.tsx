import { useState } from "react";
import { IoMdClose } from "react-icons/io";

interface Props {
  imagePath: string;
}

function PictureModal({ imagePath }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <div className="">
      <img src={imagePath} onClick={handleOpenModal} />

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-all">
          <button
            onClick={handleCloseModal}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          >
            <IoMdClose className="" color="white" size={30}/>
          </button>
          <div className="relative bg-white rounded-lg shadow-lg max-w-5xl w-full">
            <div className="p-4">
              <img src={imagePath} alt="Example" className="w-full rounded" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PictureModal;
