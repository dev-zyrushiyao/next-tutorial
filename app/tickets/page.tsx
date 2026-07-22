import TicketList from "../components/TicketList";

export default async function Tickets() {
  return (
    <main className="flex flex-col gap-5">
      <div>
        <h3>Tickets</h3>
        <small className="font-sans text-base ">Currently open tickets</small>
      </div>
      <TicketList />
    </main>
  );
}
