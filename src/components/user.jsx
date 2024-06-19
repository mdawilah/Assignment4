"use client";

import { Avatar } from "./avatar";
import { useContext } from "react";
import { UserContext } from "@/app/page";

export const User = () => {
  const { username } = useContext(UserContext);

  return (
    <div className="flex gap-2 items-center">
      <div>{username}</div>
      <Avatar username={username} />
    </div>
  );
};
