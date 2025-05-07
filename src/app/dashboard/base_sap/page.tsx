'use client';

import { useEffect, useState } from 'react';
import { BaseSap } from '@/types/baseSap';

export default function BaseSapPage() {
  const [dados, setDados] = useState<BaseSap[]>([]);

  useEffect(() => {
    fetch('/api/base-sap')
      .then(res => res.json())
      .then(setDados)
      .catch(console.error);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Base SAP</h1>
      <table className="min-w-full text-sm border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2">Ordem</th>
            <th className="border px-2">Equipamento</th>
            <th className="border px-2">Tipo Ordem</th>
            <th className="border px-2">Texto Breve</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((linha, i) => (
            <tr key={i}>
              <td className="border px-2">{linha.Ordem}</td>
              <td className="border px-2">{linha.Equipamento}</td>
              <td className="border px-2">{linha["Tipo de ordem"]}</td>
              <td className="border px-2">{linha["Texto breve"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
