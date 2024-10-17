import { useState } from "react";

const Grid = ({ start, end, path, onClick, onFindPath, onReset }) => {
  const [message, setMessage] = useState(
    "Click on a cell to set the start point"
  );

  const handleCellClick = (i, j) => {
    if (path.length > 0) return;
    onClick(i, j);
    if (!start) {
      setMessage("Now click on another cell to set the end point");
    } else if (!end) {
      setMessage("Click 'Find Path' to calculate the shortest path");
    } else {
      setMessage("Click on a cell to set a new start point");
    }
  };

  const renderGrid = () => {
    const grid = [];
    for (let i = 0; i < 20; i++) {
      const row = [];
      for (let j = 0; j < 20; j++) {
        const isStart = start && start[0] === i && start[1] === j;
        const isEnd = end && end[0] === i && end[1] === j;
        const isPath = path.some(([x, y]) => x === i && y === j);

        row.push(
          <div
            key={`${i}-${j}`}
            className={`w-8 h-8 border border-gray-300 ${
              isStart
                ? "bg-green-500"
                : isEnd
                ? "bg-red-500"
                : isPath
                ? "bg-blue-500"
                : "bg-white"
            } hover:bg-orange-500 transition-colors duration-200`}
            onClick={() => handleCellClick(i, j)}
          />
        );
      }
      grid.push(
        <div key={`row-${i}`} className="flex">
          {row}
        </div>
      );
    }
    return grid;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 text-lg font-semibold">{message}</div>
      <div className="border border-gray-400">{renderGrid()}</div>
      <div className="flex gap-x-3">
        {start && end && (
          <button
            className={`mt-4 px-4 py-2 text-white rounded ${
              start && end && path.length === 0
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={onFindPath}
            disabled={!(start && end) || path.length > 0}
          >
            Find Path
          </button>
        )}
        <button
          className={`mt-4 px-4 py-2 text-white rounded ${
            start || end || path.length > 0
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          onClick={() => {
            onReset();
            setMessage("Click on a cell to set the start point");
          }}
          disabled={!(start || end || path.length > 0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Grid;
