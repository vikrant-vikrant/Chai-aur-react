function App() {
  return (
    <>
      <div className="rounded-lg border-2 border-grey mx-110">
        <div className="bg-linear-to-t from-sky-500 to-indigo-500 p-12 w-3xl text-center text-white text-2xl font-bold rounded-tl-lg rounded-tr-lg">News you can Trust.</div>
        <div className="p-8 text-center bg-white text-black text-xl">
          <p className="font-bold">Stay up to date with the Latest!</p>
          <p className="m-2">Subscribe to our newsletter for the latest news straight into your inbox</p>
          <input type="text" name="" id="" placeholder="you@example.com" className=" text-center bg-slate-200  w-[20rem] h-[3rem] rounded-md m-2"/>
          <br />
          <button className="bg-blue-500 text-white m-2 w-[20rem] h-[2.5rem] rounded-full cursor-pointer">Subscribe Now</button>
          <p className="mt-2">We value your privacy</p>
        </div>
      </div>
    </>
  )
}

export default App
