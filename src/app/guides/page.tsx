import BackgroundVideo from "../components/Video/BackgroundVideo"

import Link from "next/link";

const raids = [
  {
    id: "mogushan-vaults",
    name: "Mogu'shan Vaults",
    bosses: [
      { id: "stone-guards", name: "The Stone Guards" },
      { id: "feng", name: "Feng the Accursed" },
      { id: "gara'jal", name: "Gara'jal the Spiritbinder" },
    ],
  },
];

export default function GuidesHome() {
  return (
    <>
      <BackgroundVideo />
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Raid Guides</h1>
        {raids.map((raid) => (
          <div key={raid.id} className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">{raid.name}</h2>
            <ul className="list-disc pl-6">
              {raid.bosses.map((boss) => (
                <li key={boss.id}>
                  <Link className="text-blue-600 hover:underline" href={`/guides/${raid.id}/${boss.id}`}>
                    {boss.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
