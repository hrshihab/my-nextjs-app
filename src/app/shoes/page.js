import React from "react";

const Shoes = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 5,
    },
  });
  const data = await res.json();
  //console.log(data);
  return (
    <div className="  flex flex-wrap gap-2 justify-around ">
      {data.map((shoe) => (
        <div key={shoe.title} className="card w-80 bg-base-100 shadow-xl py-2">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{shoe.title}</h2>
            <p>If a dog chews shoes whose shoes does he choose ?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">{shoe.price}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shoes;
