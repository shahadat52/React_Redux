import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/features/CounterSlice'

function App() {
  const dispatch = useDispatch()
  const { count } = useSelector((state) => state.counter)
  return (
    <div className="h-screen flex justify-center items-center" >
      <div className="flex justify-center items-center gap-10 ">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 text-white text-xl p-4 rounded-lg"
        >Increment</button>
        <h1 className="text-5xl font-bold  text-blue-400">
          {count}
        </h1>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 text-xl text-white p-4 rounded-lg">Decrement</button>
      </div>
    </div>
  )
}

export default App
