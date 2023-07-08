import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const logoName = "image3";
// const module = (await import(`./jpeg-images/${logoName}.jpeg`)) as {
//   default: string;
// };
const module = import.meta.glob<{ default: string }>("./jpeg-images/*.jpeg", {
  eager: true,
});
console.log(module);

function App() {
  return (
    <>
      {Object.values(module).map((src) => (
        <img src={src.default} />
      ))}
      {/* <img src={module.default}></img> */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </>
  );
}

export default App;
