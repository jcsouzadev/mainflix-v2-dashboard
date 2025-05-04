// src/components/WeekBarChart.tsx
'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Seg', programado: 12, realizado: 8, naoRealizado: 4 },
  { name: 'Ter', programado: 15, realizado: 12, naoRealizado: 3 },
  { name: 'Qua', programado: 10, realizado: 7, naoRealizado: 3 },
  { name: 'Qui', programado: 14, realizado: 10, naoRealizado: 4 },
  { name: 'Sex', programado: 8, realizado: 6, naoRealizado: 2 },
  { name: 'Sáb', programado: 6, realizado: 4, naoRealizado: 2 },
  { name: 'Dom', programado: 4, realizado: 3, naoRealizado: 1 }
];

export const WeekBarChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow mt-6">
      <h2 className="text-lg font-semibold mb-4">Atividades por Dia da Semana</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="programado" fill="#3b82f6" name="Programado" />
            <Bar dataKey="realizado" fill="#10b981" name="Realizado" />
            <Bar dataKey="naoRealizado" fill="#ef4444" name="Não Realizado" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};