"use client";
import React from "react";

interface TicketStripProps {
  tickets: {
    id: number;
    match: string;
    price: string;
    save?: string;
  }[];
}

const TicketStrip = ({ tickets }: TicketStripProps) => {
  return (
    <div className="tickets-strip container">
      {tickets.map((t) => (
        <div key={t.id} className="tkt">
          <div>{t.match}</div>
          <div>{t.price}</div>
          {t.save && <div className="save-tag">{t.save}</div>}
        </div>
      ))}
    </div>
  );
};

export default TicketStrip;



