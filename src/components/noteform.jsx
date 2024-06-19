"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const Noteform = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleCreateData() {
    await fetch("https://v1.appbackend.io/v1/rows/T6L7lQmSjbqz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ title, content }]),
    });

    router.refresh();
    setTitle("");
    setContent("");
  }
  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={handleCreateData}>Create</button>
    </div>
  );
};
