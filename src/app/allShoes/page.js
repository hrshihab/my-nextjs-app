import React from "react";

const AllShoes = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data);
  return (
    <div className="min-h-screen my-5">
      <h1 className=" text-center text-3xl text-orange-400">
        All Shoes Are Here !
      </h1>
    </div>
  );
};

export default AllShoes;
