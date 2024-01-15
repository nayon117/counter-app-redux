import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-indigo-700">
      <div className="bg-white rounded shadow pt-8 text-lg font-medium">
        <h1 className="px-4">Counter App using React-Redux</h1>
        <Counter/>
      </div>
    </div>
  );
}

export default App;
