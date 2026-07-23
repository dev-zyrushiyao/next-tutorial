import Link from "next/link";
import { Ticket } from "../interface/ticket-interface";



async function getTickets(): Promise<Ticket[]> {
  const res = await fetch("http://localhost:4000/tickets", {
    next: { revalidate: 30 },
  });

  if (!res.ok) {
    throw Error("Unable to fetch the data requested");
  }

  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();
  return (
    <>
      {tickets.length > 0 ? (
        tickets.map((ticket) => {
          return (
            <Link key={ticket.id} href={`/tickets/${ticket.id}`}>
              <div className="card my-5">
                <h4>{ticket.title}</h4>
                <p>{ticket.body.slice(0, 200)}...</p>
                <div className={`pill ${ticket.priority}`}>
                  {ticket.priority} priority
                </div>
              </div>
            </Link>
          );
        })
      ) : (
        <p className="text-center">There are no tickets</p>
      )}
    </>
  );
}
