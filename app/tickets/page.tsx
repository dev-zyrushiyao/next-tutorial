import Link from "next/link";
import TicketList from "./TicketList";
import { Suspense } from "react";
import Loading from "../loading";

export default async function Tickets() {
  return (
    <main className="flex flex-col gap-5">
      <div>
        <h3>Tickets</h3>
        <small>Currently open tickets</small>
      </div>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
