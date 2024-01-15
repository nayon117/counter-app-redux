const Counter = () => {
  return (
      <div className="p-4 h-52 w-96 flex items-center justify-center ">
          <div className="space-y-5">
          <div className="text-2xl font-semibold text-center">0</div>
          <div className="flex space-x-3">
              <button className="bg-indigo-400 text-white px-3 py-2 rounded shadow">Increment</button>
              <button className="bg-red-400 text-white px-3 py-2 rounded shadow">Decrement</button>
          </div>
         </div>
    </div>
  );
};
export default Counter;
