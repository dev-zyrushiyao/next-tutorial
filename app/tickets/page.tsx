import Link from "next/link";
import TicketList from "./TicketList";

export default async function Tickets() {
  return (
    <main className="flex flex-col gap-5">
      <div>
        <h3>Tickets</h3>
        <small>Currently open tickets</small>
      </div>
      <TicketList />
    </main>
  );
}
