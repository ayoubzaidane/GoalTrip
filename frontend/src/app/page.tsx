import Hero from "../shared/components/Hero";
import Footer from "../shared/components/Footer";

import StadiumFilter from "../features/leagues/premier-league/components/StadiumFilter";
import TicketStrip from "../features/leagues/premier-league/components/TicketStrip";
import StayList from "../features/leagues/premier-league/components/StayList";

export default function HomePage() {
  // Example dummy data (replace with API/hook later)
  const tickets = [
    { id: 1, match: "Arsenal vs Chelsea", price: "$120", save: "Save 15%" },
    { id: 2, match: "Man Utd vs Liverpool", price: "$180" },
  ];

  const stays = [
    { id: 1, name: "London Hotel", location: "London", price: "$89/night" },
    { id: 2, name: "Manchester Inn", location: "Manchester", price: "$76/night" },
    { id: 3, name: "Liverpool Lodge", location: "Liverpool", price: "$92/night" },
  ];

  return (
    <>
      

      <Hero />

      <main className="max-w-6xl mx-auto px-4 py-10">
        <StadiumFilter />

        <TicketStrip tickets={tickets} />

        <StayList stays={stays} />
      </main>

      <Footer />
    </>
  );
}




