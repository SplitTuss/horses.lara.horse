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
          <div className="modal-content">
            {/* Close button */}
            <span 
              className="close-button" 
              onClick={closeModal}
            >
              &times;
            </span>
            
            {/* Modal image */}
            <img 
              src={modalData.imageUrl} 
              alt={modalData.caption}
              className="modal-image"
            />
            
            {/* Caption */}
            <div className="modal-caption">
              {modalData.caption}
            </div>
          </div>
        </div>
      )}
    </>
  )
};

// Export the openModal function so other components can use it
export const openImageModal = (imageUrl: string, caption: string) => {
  // This will be handled by the parent component's state
  return { imageUrl, caption };
};