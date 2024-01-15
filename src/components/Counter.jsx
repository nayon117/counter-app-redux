import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";

const Counter = () => {
  const count = useSelector(state => state.value)
  const dispatch = useDispatch()
  
  const handlePlus = () => {
   dispatch(increment())
 }
  const handleMinus = () => {
   dispatch(decrement())
 }



  return (
      <div className="p-4 h-52 w-96 flex items-center justify-center ">
          <div className="space-y-5">
        <div className="text-2xl font-semibold text-center">{ count}</div>
          <div className="flex space-x-3">
              <button className="bg-indigo-400 text-white px-3 py-2 rounded shadow" onClick={handlePlus}>Increment</button>
              <button className="bg-red-400 text-white px-3 py-2 rounded shadow" onClick={handleMinus}>Decrement</button>
          </div>
         </div>
    </div>
  );
};
export default Counter;
