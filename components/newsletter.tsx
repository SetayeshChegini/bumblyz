"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

export function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setMessage("ENTER A VALID EMAIL");
      return;
    }
    setMessage("YOU'RE ON THE LIST.");
    setEmail("");
  };

  return (
    <form className={`newsletter-form ${compact ? "newsletter-form--compact" : ""}`} onSubmit={submit} noValidate>
      <div>
        <label htmlFor={compact ? "footer-email" : "newsletter-email"} className="sr-only">Email address</label>
        <input id={compact ? "footer-email" : "newsletter-email"} type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="EMAIL ADDRESS" aria-describedby={message ? `${compact ? "footer" : "newsletter"}-message` : undefined} />
        <button type="submit" aria-label="Join newsletter"><span>{compact ? "JOIN" : "JOIN THE LIST"}</span><ArrowRight aria-hidden="true" /></button>
      </div>
      {message && <p id={`${compact ? "footer" : "newsletter"}-message`} role="status">{message}</p>}
    </form>
  );
}
