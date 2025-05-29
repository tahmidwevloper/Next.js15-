import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Users",
  description: "Users page",
};

const page = () => {
  return (
    <div className="flex flex-col">
      <h3>users</h3>
      <Link href="users/1">users dynamic </Link>
      <Link href="users/2">users dynamic </Link>
      <Link href="users/3">users dynamic </Link>
    </div>
  );
};

export default page;
