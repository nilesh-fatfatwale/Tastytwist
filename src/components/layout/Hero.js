"use client"
import Right from "@/components/icons/Right";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [productName, setProductName] = useState("Pizza");

    useEffect(() => {
        const productNames = ["Biryani", "Fish", "Noodles", "Burger", "Pizza", "Pasta", "Chicken", "Vadapav", "Paneer"];
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            setProductName(productNames[currentIndex]);
            currentIndex = (currentIndex + 1) % productNames.length;
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Everything<br />
          is better<br />
          with a&nbsp;
          <span className="text-primary">
          {productName}
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Savor the flavors, complete each moment, and enjoy the joy of diverse cuisines.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-primary uppercase flex items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <Right />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image src={'/chicken_biryani.png'} layout={'fill'} objectFit={'contain'} alt={'biryani'} />
      </div>
    </section>
  );
}