import type { Ticket } from "@/app/interface/ticket-interface";
import { notFound } from "next/navigation";

async function getTicketData(id: string) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

export default async function TicketDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const ticket: Ticket = await getTicketData(id);

  return (
    <main>
      <div key={ticket.id} className="card my-5">
        <h3>{ticket.title}</h3>
        <small>Ticket by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
