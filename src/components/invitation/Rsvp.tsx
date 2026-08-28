import { useState, type FormEvent } from "react";
import { Lantern } from "./Lantern";
import { useLightSection } from "./useLightSection";
import { invitation } from "@/data/invitation";

export function Rsvp() {
  const ref = useLightSection<HTMLElement>();
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [guests, setGuests] = useState("1");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const wa = invitation.contact.whatsapp?.replace(/[^\d]/g, "");
    if (wa) {
      const text = encodeURIComponent(
        `RSVP — ${name}\n${attending === "yes" ? "Attending" : "Unable to attend"}\nGuests: ${guests}\n${message}`,
      );
      window.open(`https://wa.me/${wa}?text=${text}`, "_blank", "noopener");
    }
    setSent(true);
  };

  return (
    <section
      ref={ref}
      id="rsvp"
      className="lit-scope relative z-10 flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-24"
      style={{ ["--lit" as string]: 0 }}
    >
      <div className="absolute left-1/2 top-0 -translate-x-1/2" data-depth="0.6">
        <Lantern size={66} chain={80} glowScale={6.5} swayDuration={11} />
      </div>

      <div className="relative mt-24 w-full max-w-sm">
        <p className="reveal text-center text-[0.55rem] uppercase tracking-[0.44em] text-[color:var(--gold)]/70">
          Kindly respond
        </p>
        <h2 className="reveal mt-4 text-center display text-3xl text-[color:var(--ivory)]">RSVP</h2>
        <div className="reveal mx-auto mt-6 rule" />

        {sent ? (
          <p className="reveal mt-10 text-center text-sm italic leading-relaxed text-[color:var(--ivory)]/70">
            Thank you, {name || "friend"}. Your response has been noted with joy.
          </p>
        ) : (
          <form className="reveal mt-10 flex flex-col gap-6" onSubmit={onSubmit}>
            <label className="field">
              <span>Name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} required />
            </label>

            <fieldset className="flex gap-3">
              <legend className="field-label mb-3">Attending</legend>
              {(["yes", "no"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setAttending(v)}
                  aria-pressed={attending === v}
                  className={`chip ${attending === v ? "chip-active" : ""}`}
                >
                  {v === "yes" ? "Joyfully accept" : "Regretfully decline"}
                </button>
              ))}
            </fieldset>

            <label className="field">
              <span>Number of guests</span>
              <input
                type="number"
                min={1}
                max={12}
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </label>

            <label className="field">
              <span>Message</span>
              <textarea rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
            </label>

            <button type="submit" className="btn-ember mt-2">
              Send response
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
