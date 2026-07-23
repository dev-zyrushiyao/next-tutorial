import Link from "next/link";
import { Ticket } from "../interface/ticket-interface";
import { setTimeout } from "timers/promises";

async function getTickets(): Promise<Ticket[]> {
  await setTimeout(1000);

  const res = await fetch("http://localhost:4000/tickets", {
    next: { revalidate: 0 },
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
