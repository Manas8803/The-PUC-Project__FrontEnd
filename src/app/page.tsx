"use client";

import Image from "next/image";
import RedCard from "./home/components/redcard";
import GreenCard from "./home/components/greencard";
import VehicleDetected from "./home/components/vehicleDetected";
import VehicleWithPUC from "./home/components/ValidPuc";
import { Carousel } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import CarouselDemo from "./home/components/Carosaldemo";
import Searchbar from "./searchbar/page";
import Navbar from "./components/ui/navigation";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Searchbar onSearch={function (query: string): void {
        throw new Error("Function not implemented.");
      }} />
      <CarouselDemo />


    </main>
  );
}
