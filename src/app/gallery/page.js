import Image from "next/image";
import React from "react";
import nextImage from "@/assets/next.png";

export const metadata = {
  title: "Gallery",
  description: "Gallery page",
};

const page = () => {
  throw new Error("This is a test error");

  return (
    <div>
      <h1 className="text-center font-bold text-3xl">My Gallery</h1>
      <img
        src="https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg"
        alt="Tkinter image"
        width={700}
        height={200}
      />
      <h1 className=" text-center border-y-2">Divider</h1>
      <Image
        src={nextImage}
        alt="Picture of the author"
        width={700}
        height={200}
      />
    </div>
  );
};

export default page;
