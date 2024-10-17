import { useState } from "react";
import axios from "axios";
import Grid from "./components/Grid";

function App() {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [path, setPath] = useState([]);

  const handleCellClick = (x, y) => {
    if (!start) {
      setStart([x, y]);
    } else if (!end) {
      setEnd([x, y]);
    }
  };
  const handleReset = () => {
    setStart(null);
    setEnd(null);
    setPath([]);
  };

  const findPath = async () => {
    if (start && end && path.length === 0) {
      try {
        const response = await axios.post("/api/find-path", { start, end });
        if (response.data.path) {
          setPath(response.data.path);
        } else {
          alert("No path found");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error finding path");
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-500 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Path Finder</h1>
      <Grid
        start={start}
        end={end}
        path={path}
        onClick={handleCellClick}
        onFindPath={findPath}
        onReset={handleReset}
      />
    </div>
  );
}

export default App;
