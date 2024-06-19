import { NoteCard } from "@/components/notecard";
import { Noteform } from "@/components/noteform";

export default async function Home() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/T6L7lQmSjbqz", {
    cache: "no-store",
  });
  const { data } = await res.json();

  return (
    <main className="max-w-2xl m-auto py-12 space-y-4">
      <h1>Euro Key Players</h1>
      <div className="space-y-4">
        {data.map((item) => {
          return <NoteCard key={item._id} item={item} />;
        })}
      </div>
      <Noteform />
    </main>
  );
}
