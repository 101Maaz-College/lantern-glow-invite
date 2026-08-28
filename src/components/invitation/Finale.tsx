import { Lantern } from "./Lantern";
import { useLightSection } from "./useLightSection";
import { invitation } from "@/data/invitation";

export function Finale() {
  const ref = useLightSection<HTMLElement>({ duration: 4, start: "top 85%" });
  const { contact, social } = invitation;
  const wa = contact.whatsapp?.replace(/[^\d]/g, "");

  const links = [
    social.instagram && { label: "Instagram", href: social.instagram },
    social.facebook && { label: "Facebook", href: social.facebook },
    social.youtube && { label: "YouTube", href: social.youtube },
    contact.phone && { label: "Call", href: `tel:${contact.phone}` },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <section
      ref={ref}
      className="lit-scope finale relative z-10 flex min-h-[110svh] flex-col items-center justify-center overflow-hidden px-6 py-28"
      style={{ ["--lit" as string]: 0 }}
    >
      {/* canopy of lanterns */}
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between px-2 sm:px-10" data-depth="0.4">
        {[46, 64, 38, 72, 44].map((s, i) => (
          <Lantern
            key={i}
            size={s}
            chain={40 + ((i * 53) % 130)}
            glowScale={6}
            swayDuration={9 + i * 1.5}
            variant={i % 2 ? "simple" : "ornate"}
          />
        ))}
      </div>

      <div className="relative mt-40 flex flex-col items-center text-center">
        <p className="reveal text-[0.55rem] uppercase tracking-[0.5em] text-[color:var(--gold)]/75">
          With love
        </p>
        <h2 className="reveal mt-7 display text-4xl leading-tight text-[color:var(--ivory)] sm:text-6xl">
          {invitation.groomName.toUpperCase()}
          <span className="mx-3 italic text-[color:var(--gold)]">&amp;</span>
          {invitation.brideName.toUpperCase()}
        </h2>
        <div className="reveal mt-8 rule" />
        <p className="reveal mt-8 max-w-[26ch] text-[0.62rem] uppercase tracking-[0.34em] text-[color:var(--ivory)]/55">
          {invitation.closingLine}
        </p>

        <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-4">
          <a href="#rsvp" className="btn-ember">
            RSVP
          </a>
          {wa && (
            <a
              href={`https://wa.me/${wa}`}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-outline"
            >
              WhatsApp
            </a>
          )}
        </div>

        {links.length > 0 && (
          <div className="reveal mt-10 flex flex-wrap justify-center gap-x-7 gap-y-3">
            {links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer noopener" className="link-gold">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
