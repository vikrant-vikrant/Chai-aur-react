import { useState } from "react";
import Ticket from "./Ticket";
import { genTicket, sum } from "./helper";

export default function Lottery({ n = 3, winningSum = 15 }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = sum(ticket) === winningSum;

  let buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div className="border-sky-200 border-1 p-6 rounded-4xl backdrop-blur-sm text-center ">
      <h1 className="font-bold text-6xl text-blue-400 ">Lottery Game!</h1>
      <Ticket ticket={ticket} />
      <button
        className="rounded-xl text-2xl font-semibold px-6 py-4 cursor-pointer bg-blue-200 text-blue-800"
        onClick={buyTicket}
      >
        Get New Ticket
      </button>
      <h3 className="font-bold text-4xl p-4 text-yellow-500">
        {isWinning && "Congratulations, you won!"}
      </h3>
    </div>
  );
}
