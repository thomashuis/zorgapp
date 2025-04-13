import { useState } from 'react';

export default function Home() {
  const [client, setClient] = useState({ naam: '', doel1: '', doel2: '' });

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Patiëntendossier</h1>

      <div className="mb-4 border p-4 rounded">
        <h2 className="text-xl font-semibold">Persoonsgegevens</h2>
        <input
          className="w-full border p-2 mt-2"
          placeholder="Naam cliënt"
          value={client.naam}
          onChange={(e) => setClient({ ...client, naam: e.target.value })}
        />
      </div>

      <div className="mb-4 border p-4 rounded">
        <h2 className="text-xl font-semibold">Doelstellingen</h2>
        <input
          className="w-full border p-2 mt-2 bg-blue-100"
          placeholder="Doelstelling 1"
          value={client.doel1}
          onChange={(e) => setClient({ ...client, doel1: e.target.value })}
        />
        <input
          className="w-full border p-2 mt-2 bg-green-100"
          placeholder="Doelstelling 2"
          value={client.doel2}
          onChange={(e) => setClient({ ...client, doel2: e.target.value })}
        />
      </div>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => console.log(client)}
      >
        Opslaan
      </button>
    </div>
  );
}
