function App() {

  return (
    <div className="h-screen flex justify-center items-center" >
      <div className="flex justify-center items-center gap-10 ">
        <button className="bg-green-500 text-white text-xl p-4 rounded-lg">Increment</button>
        <h1 className="text-5xl font-bold  text-blue-400">
          0
        </h1>
        <button className="bg-red-500 text-xl text-white p-4 rounded-lg">Decrement</button>
      </div>
    </div>
  )
}

export default App
