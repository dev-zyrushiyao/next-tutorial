import type { Ticket } from "@/app/interface/ticket-interface";
import Loading from "@/app/loading";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const dynamicParams = false;

export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/tickets");
  const tickets: Ticket[] = await res.json();

  return tickets.map((ticket) => ({ id: ticket.id }));
}

async function getTicketData(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

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
      <Suspense fallback={<Loading />}>
        <div key={ticket.id} className="card my-5">
          <h3>{ticket.title}</h3>
          <small>Ticket by {ticket.user_email}</small>
          <p>{ticket.body}</p>
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      </Suspense>
    </main>
  );
}
