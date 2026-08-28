import { Lantern } from "./Lantern";
import { useLightSection } from "./useLightSection";
import { invitation } from "@/data/invitation";
import { Countdown } from "./Countdown";

export function Message() {
  const ref = useLightSection<HTMLElement>();

  return (
    <section
      ref={ref}
      className="lit-scope relative z-10 flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-24"
      style={{ ["--lit" as string]: 0 }}
    >
      <div className="absolute inset-x-0 top-0 flex justify-between px-6" data-depth="0.5">
        <Lantern size={54} chain={70} glowScale={6} swayDuration={11} variant="simple" />
        <Lantern size={64} chain={140} glowScale={6} swayDuration={13} />
      </div>

      <div className="relative mt-24 flex max-w-md flex-col items-center text-center">
        <p className="reveal text-[0.6rem] uppercase tracking-[0.42em] text-[color:var(--ivory)]/50">
          {invitation.hostLine}
        </p>
        <p className="reveal mt-7 display text-3xl text-[color:var(--ivory)] sm:text-4xl">
          {invitation.groomName} <span className="italic text-[color:var(--gold)]">&amp;</span>{" "}
          {invitation.brideName}
        </p>
        <p className="reveal mt-6 max-w-[26ch] text-sm leading-relaxed text-[color:var(--ivory)]/60">
          {invitation.inviteLine}
        </p>
        <div className="reveal mt-10 rule" />
        <div className="reveal mt-12 w-full">
          <Countdown target={invitation.dateISO} />
        </div>
      </div>
    </section>
  );
}
