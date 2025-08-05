 

const ImagePreview = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center"
      onClick={onClose}
    >
      <img
        src={imageUrl}
        alt="Full View"
        className="max-w-full max-h-full object-contain rounded shadow-xl"
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-6 text-white text-3xl font-bold hover:text-red-400"
      >
        &times;
      </button>
    </div>
  );
};

export default ImagePreview;
