import { useState } from "react";
// https://media.tenor.com/P-8ZvqnS4AwAAAAM/dancing-cat-dancing-kitten.gif

function App() {
  const [isSaidYes, setIsSaidYes] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseEnter = () => {
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;

    setButtonPosition({
      x: newX,
      y: newY,
    });
  };

  const sheSaidYes = () => {
    setIsSaidYes(true);
  };

  return (
    <div
      className={`min-h-screen min-w-screen flex justify-center flex-col items-center gap-10 ${
        isSaidYes
          ? "bg-[url('https://media.tenor.com/P-8ZvqnS4AwAAAAM/dancing-cat-dancing-kitten.gif')]"
          : ""
      } `}
    >
      <div>
        <img
          src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F06%2F26%2Ftiny-white-kitten-873941684-2000.jpg"
          alt=""
          className="w-64 h-auto"
        />
      </div>
      <div>
        <span className="text-4xl font-bold text-center">
          Do u want to hangout with me?
        </span>
      </div>

      <div className="flex gap-3">
        <button
          className="rounded bg-red-500 font-bold px-6 py-4 text-white"
          onClick={sheSaidYes}
        >
          yes
        </button>
        <button
          className="rounded bg-black font-bold px-6 py-4 text-white absolute"
          style={{
            top: buttonPosition.y,
            left: buttonPosition.x,
          }}
          onMouseEnter={handleMouseEnter}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default App;
