import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export type InvocationPreset = "allah" | "om" | "jesus" | "ram" | "custom" | "none";

export interface Invocation {
  preset: InvocationPreset;
  text: string;
  translation?: string;
  rtl: boolean;
  lang: string;
}

export interface WeddingEvent {
  id: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  description?: string;
  mapsUrl?: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export const invitation = {
  brideName: "Ayesha",
  groomName: "Ahmed",
  date: "14 December 2026",
  dateISO: "2026-12-14T11:00:00+05:30",
  hostLine: "Together with their families",
  inviteLine: "invite you to celebrate their special day",
  closingLine: "Thank you for celebrating with us",

  invocation: {
    preset: "allah",
    text: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    translation: "In the name of Allah, the Most Gracious, the Most Merciful",
    rtl: true,
    lang: "ar",
  } as Invocation,

  events: [
    {
      id: "nikah",
      name: "Nikah",
      date: "14 December 2026",
      time: "11:00 AM",
      venue: "Falaknuma Banquet Hall",
      address: "Engine Bowli, Falaknuma, Hyderabad",
      description: "The solemnisation, followed by lunch.",
      mapsUrl: "https://maps.google.com/?q=Falaknuma+Palace+Hyderabad",
    },
    {
      id: "walima",
      name: "Walima",
      date: "16 December 2026",
      time: "7:30 PM",
      venue: "Taj Krishna, Banjara Hills",
      address: "Road No. 1, Banjara Hills, Hyderabad",
      description: "An evening reception under lantern light.",
      mapsUrl: "https://maps.google.com/?q=Taj+Krishna+Banjara+Hills+Hyderabad",
    },
  ] as WeddingEvent[],

  venue: {
    name: "Taj Krishna, Banjara Hills",
    address: "Road No. 1, Banjara Hills",
    city: "Hyderabad",
    mapsUrl: "https://maps.google.com/?q=Taj+Krishna+Banjara+Hills+Hyderabad",
  },

  gallery: [
    { src: gallery1, alt: "The couple beneath a canopy of lanterns", width: 1024, height: 1280, caption: "The first dance" },
    { src: gallery2, alt: "Candlelit banquet table with brass lanterns", width: 1280, height: 960, caption: "The table" },
    { src: gallery3, alt: "Lantern-lit palace corridor at night", width: 1024, height: 1280, caption: "The corridor" },
  ] as GalleryItem[],

  contact: {
    whatsapp: "+919999999999",
    phone: "+919999999999",
  },

  social: {
    instagram: "https://instagram.com",
    facebook: "",
    youtube: "",
  },

  music: {
    enabled: true,
    src: "",
    title: "Ambient oud",
  },
};

export type Invitation = typeof invitation;
