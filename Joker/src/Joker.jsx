import { useEffect, useState } from "react";

export default function Joker() {
  let [joke, setjoke] = useState({});
  const url = "https://v2.jokeapi.dev/joke/Any?type=single";
  const GetJoke = async () => {
    let response = await fetch(url);
    let jsonResponse = await response.json();
    console.log(jsonResponse.joke);
    setjoke({ joke: jsonResponse.joke });
  };

  useEffect(() => {
    async function getFristJoke() {
      let response = await fetch(url);
      let jsonResponse = await response.json();
      setjoke({ joke: jsonResponse.joke });
    }
    getFristJoke();
  },[]);
  return (
    <div className="text-center w-4xl ml-100">
      <h1 className="text-5xl p-12 font-bold font-[crusive]">JOKE !</h1>
      <h2 className="p-6 text-5xl font-[fantasy]">{joke.joke}</h2>
      <button onClick={GetJoke} className="bg-[#d40e1d] text-white p-3 rounded-2xl text-2xl">New JOKE</button>
    </div>
  );
}
