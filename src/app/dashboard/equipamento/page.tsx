'use client';

import { useState } from 'react';
import { 
  Download,
  HardDrive,
  CheckCircle2,
  XCircle,
  Clock,
  Server,
  Cpu
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, Tooltip, Legend, CartesianGrid } from 'recharts';

export default function EquipamentoPage() {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [week, setWeek] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  // Dados de exemplo
  const stats = [
    { title: "Total Equipamentos", value: 32, icon: <HardDrive className="text-white" /> },
    { title: "Operacionais", value: 24, icon: <CheckCircle2 className="text-white" /> },
    { title: "Em Manutenção", value: 5, icon: <XCircle className="text-white" /> },
    { title: "Fora de Serviço", value: 3, icon: <Clock className="text-white" /> },
  ];

  // Dados para o gráfico semanal
  const weeklyMaintenanceData = [
    { name: 'Seg', programado: 8, realizado: 6, naoRealizado: 2 },
    { name: 'Ter', programado: 10, realizado: 8, naoRealizado: 2 },
    { name: 'Qua', programado: 7, realizado: 5, naoRealizado: 2 },
    { name: 'Qui', programado: 9, realizado: 7, naoRealizado: 2 },
    { name: 'Sex', programado: 6, realizado: 5, naoRealizado: 1 },
    { name: 'Sáb', programado: 4, realizado: 3, naoRealizado: 1 },
    { name: 'Dom', programado: 3, realizado: 2, naoRealizado: 1 }
  ];

  const statusData = [
    { name: "Operacionais", value: 24 },
    { name: "Em Manutenção", value: 5 },
    { name: "Fora de Serviço", value: 3 }
  ];

  return (
    <div className="space-y-6">
      {/* Seção de Importação */}
      
      <h1 className="text-2xl font-bold text-[#152340]">Gestão de Equipamentos</h1>

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Cpu size={18} className="text-[#012340]" /> Manutenções por Dia da Semana
        </h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyMaintenanceData}>
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

      {/* Gráfico de Status */}
      <div className="bg-white rounded-lg p-4 shadow">
        <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <Server size={18} className="text-[#012340]" /> Status dos Equipamentos
        </h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={statusData}>
              <Bar dataKey="value" fill="#04D939" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}