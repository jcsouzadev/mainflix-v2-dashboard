'use client';

import { useState } from 'react';
import { 
  Download,
  ClipboardList,
  CheckCircle2,
  XCircle,
  Clock,
  Calendar
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, Tooltip, Legend, CartesianGrid } from 'recharts';

export default function DashboardPrincipal() {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [week, setWeek] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  // Dados de exemplo
  const stats = [
    { title: "Total de Ordens", value: 125, icon: <ClipboardList className="text-white" /> },
    { title: "Realizadas", value: 89, icon: <CheckCircle2 className="text-white" /> },
    { title: "Não Realizadas", value: 24, icon: <XCircle className="text-white" /> },
    { title: "Atrasadas", value: 12, icon: <Clock className="text-white" /> },
    { title: "Próx. Vencimento", value: 8, icon: <Calendar className="text-white" /> },
  ];

  // Dados para o gráfico semanal
  const weeklyData = [
    { name: 'Seg', programado: 12, realizado: 8, naoRealizado: 4 },
    { name: 'Ter', programado: 15, realizado: 12, naoRealizado: 3 },
    { name: 'Qua', programado: 10, realizado: 7, naoRealizado: 3 },
    { name: 'Qui', programado: 14, realizado: 10, naoRealizado: 4 },
    { name: 'Sex', programado: 8, realizado: 6, naoRealizado: 2 },
    { name: 'Sáb', programado: 6, realizado: 4, naoRealizado: 2 },
    { name: 'Dom', programado: 4, realizado: 3, naoRealizado: 1 }
  ];

  const efficiencyData = [
    { name: "Sem 1", value: 85 },
    { name: "Sem 2", value: 78 },
    { name: "Sem 3", value: 92 },
    { name: "Sem 4", value: 88 },
  ];

  return (
    <div className="space-y-6">
      {/* Seção de Importação */}
      
      <h1 className="text-2xl font-bold text-[#152340]">Gestão da Manutenção</h1>

      {/* Filtros */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="flex gap-2">
          <input 
            type="date" 
            value={startDate} 
            onChange={(e) => setStartDate(e.target.value)} 
            className="border border-gray-300 p-2 rounded bg-white"
          />
          <input 
            type="date" 
            value={endDate} 
            onChange={(e) => setEndDate(e.target.value)} 
            className="border border-gray-300 p-2 rounded bg-white"
          />
          <input 
            type="number" 
            placeholder="Semana" 
            value={week} 
            onChange={(e) => setWeek(e.target.value)} 
            className="border border-gray-300 p-2 rounded w-24 bg-white"
          />
        </div>
        <button className="bg-[#025939] text-white p-2 rounded flex items-center hover:bg-[#027333]">
          <Download className="mr-2" size={16} />
          Exportar PDF
        </button>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-[#027333] rounded-lg p-4 text-white">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              <div className="bg-[#025939] p-2 rounded-full">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gráfico Semanal */}
      <div className="bg-white rounded-lg p-4 shadow">
        <h2 className="text-lg font-semibold mb-4">Atividades por Dia da Semana</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="programado" fill="#3b82f6" name="Programado" radius={[4, 4, 0, 0]} />
              <Bar dataKey="realizado" fill="#10b981" name="Realizado" radius={[4, 4, 0, 0]} />
              <Bar dataKey="naoRealizado" fill="#ef4444" name="Não Realizado" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Gráfico de Eficiência */}
      <div className="bg-white rounded-lg p-4 shadow">
        <h2 className="text-lg font-semibold mb-2">Eficiência do Cumprimento</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={efficiencyData}>
              <Line type="monotone" dataKey="value" stroke="#04D939" strokeWidth={2} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}