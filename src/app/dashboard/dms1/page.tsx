// src/app/dashboard/dms1/page.tsx
'use client';

import React, { useState } from 'react';

interface OrdemServico {
  os: string;
  data: string;
  tipo: string;
  descricao: string;
}

const Dashboard = () => {
  const [ordens, setOrdens] = useState<OrdemServico[]>([]);

  // Aqui você pode adicionar a lógica de carregamento dos dados ou outros efeitos
  // Exemplo de dados fictícios:
  const ordensFicticias: OrdemServico[] = [
    { os: 'OS001', data: '2025-05-01', tipo: 'Manutenção Preventiva', descricao: 'Troca de óleo' },
    { os: 'OS002', data: '2025-05-02', tipo: 'Manutenção Corretiva', descricao: 'Substituição de peça' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Dashboard de Manutenção</h1>
      <table className="mt-4 table-auto w-full">
        <thead>
          <tr>
            <th>OS</th>
            <th>Data</th>
            <th>Tipo</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {ordensFicticias.map((ordem, index) => (
            <tr key={index}>
              <td>{ordem.os}</td>
              <td>{ordem.data}</td>
              <td>{ordem.tipo}</td>
              <td>{ordem.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

