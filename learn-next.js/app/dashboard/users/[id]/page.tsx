import React from "react";

// const page = ({ params }: { params: { id: string } }) => {
const page = ({ params }: { id: string }) => {
  const { id } = params;

  return (
    <div>
      <p className="text-3xl text-red-300">The user is : {id}</p>
    </div>
  );
};

export default page;
