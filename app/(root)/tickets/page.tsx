"use client";

import TicketCard from "@/components/TicketCard";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Page = () => {
  const [data, setData] = useState([]);

  const { toast } = useToast();

  const router = useRouter();
  const hasAccess = Cookies.get("user") as string;
  
  useEffect(() => {
    if (!hasAccess) {
      router.push("/sign-in");
    }
  }, [hasAccess]);

  useEffect(() => {
    axios
      .post("/api/getTicket", { id: Cookies.get("id") })
      .then((response) => {
        console.log(response.data.ticketData);
        setData(response.data.ticketData);
      })
      .catch((error) => {
        console.error("Error:", error);
        toast({
          title: "Error occured",
        });
      });
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen px-2 gap-10">
      <h1 className="text-3xl font-semibold mt-7">Tickets</h1>
      <div className="flex gap-2">
        {data &&
          data.map(({ qr, name, membershipId, event }, items) => (
            <TicketCard
              key={items}
              name={name}
              event={event}
              qr={qr}
              membershipId={membershipId}
            />
          ))}
      </div>
    </div>
  );
};

export default Page;
