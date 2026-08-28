import { createFileRoute } from "@tanstack/react-router";
import { Atmosphere } from "@/components/invitation/Atmosphere";
import { Hero } from "@/components/invitation/Hero";
import { Message } from "@/components/invitation/Message";
import { Events } from "@/components/invitation/Events";
import { Venue } from "@/components/invitation/Venue";
import { Gallery } from "@/components/invitation/Gallery";
import { Rsvp } from "@/components/invitation/Rsvp";
import { Finale } from "@/components/invitation/Finale";
import { MusicControl } from "@/components/invitation/MusicControl";
import { invitation } from "@/data/invitation";

const title = `${invitation.groomName} & ${invitation.brideName} — ${invitation.date}`;
const description = `${invitation.hostLine} ${invitation.groomName} & ${invitation.brideName} ${invitation.inviteLine} in Hyderabad on ${invitation.date}.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[color:var(--ink)] text-[color:var(--ivory)]">
      <Atmosphere />
      <Hero />
      <Message />
      <Events />
      <Gallery />
      <Venue />
      <Rsvp />
      <Finale />
      <MusicControl />
    </main>
  );
}
