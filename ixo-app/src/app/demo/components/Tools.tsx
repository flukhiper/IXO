const Tools: React.FC = () => {
  return (
    <div className="absolute top-4 left-4 bg-gray-900 shadow-lg rounded p-4 z-10">
      <h4 className="font-bold mb-2">Tools</h4>
      <button className="block w-full text-left px-2 py-1 mb-1 bg-gray-700 hover:bg-gray-800 rounded">
        Pen Tool
      </button>
      <button className="block w-full text-left px-2 py-1 mb-1 bg-gray-700 hover:bg-gray-800 rounded">
        Rectangle Tool
      </button>
      <button className="block w-full text-left px-2 py-1 mb-1 bg-gray-700 hover:bg-gray-800 rounded">
        Circle Tool
      </button>
    </div>
  );
};

export default Tools;