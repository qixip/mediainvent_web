"use client";
import { useState } from "react";

interface ContactResponse {
  ok?: boolean;
  error?: string;
}

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setOk(null);
    setError(null);

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const res = await fetch("/contact/sendmail.php", { method: "POST", body: formData });
      const data: ContactResponse = await res.json().catch(() => ({}));

      if (res.ok && data?.ok) {
        setOk(true);
        form.reset();
      } else {
        setOk(false);
        setError(data?.error || "Could not send. Please try again.");
      }
    } catch {
      setOk(false);
      setError("Network error. Check your connection.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-xl">
      {/* Honeypot — bots fill this, humans never see it */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      {/* Optional name */}
      <div>
        <label htmlFor="name" className="block mb-1">Your name (optional)</label>
        <input
          id="name"
          name="name"
          className="w-full rounded-md bg-black p-3 outline-none
                     focus-visible:ring-2 focus-visible:ring-ring
                     focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        />
      </div>

      {/* REQUIRED email */}
      <div>
        <label htmlFor="email" className="block mb-1">Email<span aria-hidden="true">*</span></label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-md bg-black p-3 outline-none
                     focus-visible:ring-2 focus-visible:ring-ring
                     focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        />
      </div>

      {/* OPTIONAL message (text field/textarea) */}
      <div>
        <label htmlFor="message" className="block mb-1">Your request (optional)</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-md bg-black p-3 outline-none
                     focus-visible:ring-2 focus-visible:ring-ring
                     focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          placeholder="Tell us anything that helps (you can also leave this blank)."
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center rounded-md px-6 py-3 font-medium
                   bg-primary text-primary-foreground
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                   focus-visible:ring-offset-2 focus-visible:ring-offset-background
                   disabled:opacity-70"
      >
        {sending ? "Sending..." : "Start your brand"}
      </button>

      {ok && <p className="text-green-500">Sent! We’ll reply soon.</p>}
      {ok === false && <p className="text-red-500">{error}</p>}
    </form>
  );
}
