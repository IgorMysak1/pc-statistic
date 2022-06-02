import React from "react";
import Link from "next/link";
import { navigation } from "../constants";

export const Navigation = () => {
  return (
    <div className="w-fit mx-auto bg-darkBlack p-2 rounded-3xl flex justify-center">
      {navigation.map(({ id, title, path }) => (
        <Link key={id} href={path}>
          <a className="mr-2 last:mr-0 bg-bg flex justify-center items-center px-5 py-1 rounded-xl">
            {title}
          </a>
        </Link>
      ))}
    </div>
  );
};
