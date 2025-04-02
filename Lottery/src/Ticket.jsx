import TicketNum from "./TicketNum";
export default function Ticket({ ticket }) {
  return (
    <div className=" w-xl rounded-2xl border-sky-200  p-4 m-4">
      <p className="text-xl p-2">Lottery Number</p>
      <div>
        {ticket.map((num, idx) => (
          <TicketNum num={num} key={idx} />
        ))}
      </div>
    </div>
  );
}
