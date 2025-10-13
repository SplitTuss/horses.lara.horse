'use client';
import { useState } from "react";

interface ModalData {
  imageUrl: string;
  caption: string;
}

export function ImageModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<ModalData>({imageUrl: '', caption: ''});

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const openModal = (imageUrl: string, caption: string) => {
    setModalData({ imageUrl, caption });
    setIsOpen(true);
  };


  const closeModal = () => {
    setIsOpen(false);
  };

   // Close modal when clicking outside the image
   const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
    {/* Modal backdrop and content */}
    {isOpen && (
        <div 
          className="modal-backdrop" 
          onClick={handleBackdropClick}
        >
          <div> 
            
            {/* Modal image */}
            <img 
              src={modalData.imageUrl} 
              alt={modalData.caption}
            />
            
            {/* Caption */}
            <div>
              {modalData.caption}
            </div>
          </div>
        </div>
      )}
    </>
  )
};

export const openImageModal = (imageUrl: string, caption: string) => {
  // This will be handled by the parent component's state
  return { imageUrl, caption };
};