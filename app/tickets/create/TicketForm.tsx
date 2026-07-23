"use client";

import { useState } from "react";
import PrimaryButton from "@/app/components/PrimaryButton";
import { useRouter } from "next/navigation";

type Priority = "low" | "medium" | "high";
type FormMenu = [string, string, string, string];

const priorityMenu: Priority[] = ["low", "medium", "high"];
const ticketForm: FormMenu = ["Title", "Body", "Priority", "Email"];

export default function TicketForm() {
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [priority, setPriority] = useState<string>("low");
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    setIsLoading(true);

    const ticket = {
      title: title,
      body: body,
      priority: priority,
      email: email,
    };

    const res = await fetch("http://localhost:4000/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket),
    });

    if (res.status === 201) {
      router.refresh();
      router.push("/tickets");
    }
  }

  function renderInputForm(t: string) {
    switch (t) {
      case "Title":
        return (
          <input
            required
            type="text"
            id={t}
            name={t}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="font-sans border-2 border-violet-300 rounded-sm p-3"
          />
        );
      case "Body":
        return (
          <textarea
            required
            id={t}
            name={t}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="font-sans border-2 border-violet-300 rounded-sm p-3"
          ></textarea>
        );
      case "Priority":
        return (
          <select
            required
            className="font-sans border-2 border-violet-300 rounded-sm p-3"
            id={t}
            name={t}
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            {priorityMenu.map((p) => {
              return (
                <option key={p} value={p}>
                  {p.toUpperCase()} Priority
                </option>
              );
            })}
          </select>
        );
      case "Email":
        return (
          <input
            required
            type="email"
            id={t}
            name={t}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="font-sans border-2 border-violet-300 rounded-sm p-3"
          />
        );
      default:
        return null;
    }
  }

  return (
    <form
      className="w-1/2 flex flex-col gap-10"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h4>Add a new ticket</h4>
      {ticketForm.map((t) => {
        return (
          <div className="flex flex-col gap-1" key={t}>
            <label htmlFor={t} className="font-serif tracking-wider">
              {t}:
            </label>
            {renderInputForm(t)}
          </div>
        );
      })}
      <PrimaryButton
        label={isLoading ? "Adding..." : "Add Ticket"}
        type="submit"
        disabled={isLoading}
      ></PrimaryButton>
    </form>
  );
}
