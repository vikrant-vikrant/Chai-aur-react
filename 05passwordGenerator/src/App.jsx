import { useCallback, useEffect, useRef, useState } from "react";

// import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charachtorAllowed, setCharachtorAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charachtorAllowed) str += "!@#$%&?.;:";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charachtorAllowed, setPassword]);

  const copyPass = useCallback(() => {
    // passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charachtorAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-xl px-10 py-6 my-30 text-white bg-gray-400">
        <h1 className="text-4xl font-bold text-center py-4">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg bg-white text-black overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-4"
            placeholder="Password"
            readOnly
          />
          <button
            ref={passwordRef}
            onClick={copyPass}
            className="outline-none bg-blue-400 text-white px-3 py-.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              name=""
              id=""
              min={6}
              max={16}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            {" "}
            <input
              type="checkbox"
              name=""
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              defaultChecked={numberAllowed}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            {" "}
            <input
              type="checkbox"
              name=""
              id="numberChar"
              onChange={() => {
                setCharachtorAllowed((prev) => !prev);
              }}
              defaultChecked={charachtorAllowed}
            />
            <label htmlFor="numberChar">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
