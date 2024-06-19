import React from "react";
import { User } from "./user";

export const Header = () => {
  return (
    <header className="flex justify-between items-center bg-indigo-50 p-8">
      <div>Logo</div>
      <User />
    </header>
  );
};
