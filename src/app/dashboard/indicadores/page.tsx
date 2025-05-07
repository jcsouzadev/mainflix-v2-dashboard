'use client';

import React from 'react';

const metas: { [key: string]: number } = {
  "Cumprimento do Plano Lubrificação (%)": 100,
  "Cumprimento Manutenção Preventiva (%)": 100,
  "Cumprimento da Inspeção Técnica (%)": 100,
  "Resolução Anomalias de Inspeções Técnica (%)": 100,
  "Resolução  Inspeções Preditivas (%)": 100,
  "Resolução Anomalias de Inspeções Preditivas (%)": 100,
  "Calibração": 100,
  "Reforma": 80,
  "Melhorias": 80,
  "Retrabalho": 100,
  "Nº de Sinistros": 100,
  "Corretiva Programada Mecânica": 95,
  "Corretiva Programada Elétrica": 95,
  "Manutenção Emergencial": 100,
  "Cumprimento dos Planos de Manutenção": 100
};

const meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

const planejadas = [
  [124, 101, 46, 74, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 6, 12, 0, 0, 0, 0, 0, 0, 0, 0],
  [15, 18, 62, 36, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 33, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 78, 0, 0, 0, 0, 0, 0, 0, 0],
  [19, 7, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0],
  [458, 170, 148, 44, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1397, 1413, 1552, 2206, 0, 0, 0, 0, 0, 0, 0, 0],
  [218, 103, 63, 23, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 122, 193, 45, 0, 0, 0, 0, 0, 0, 0, 0],
  [407, 180, 259, 259, 0, 0, 0, 0, 0, 0, 0, 0]
];

const executadas = [
  [0, 22, 13, 18, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 12, 30, 6, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 8, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 3, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [4, 195, 366, 371, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 28, 36, 7, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 56, 78, 15, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 35, 47, 32, 0, 0, 0, 0, 0, 0, 0, 0]
];

const indicadoresCalculados = executadas.map((linha, i) => {
  const nome = Object.keys(metas)[i];
  const meta = metas[nome] || 0;
  const percentual = linha.map((val, j) => {
    const plan = planejadas[i][j] || 0;
    const calc = plan === 0 ? 0 : (val / plan) * 100;
    return calc === 0 ? "" : calc.toFixed(2);
  });
  return [nome, `${meta.toFixed(2)}%`, ...percentual];
});

export default function IndicadoresPage() {
  return (
    <div className="p-6 space-y-10">
      <div>
        <h1 className="text-2xl font-bold mb-4 text-[#025939]">Indicadores Calculados</h1>
        <div className="overflow-auto">
          <table className="table-auto w-full border border-gray-300 text-sm text-left">
            <thead className="bg-[#E6F4EA]">
              <tr>
                <th className="border px-4 py-2">INDICADOR</th>
                <th className="border px-4 py-2">Meta</th>
                {meses.map((mes, idx) => (
                  <th key={idx} className="border px-4 py-2">{mes}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {indicadoresCalculados.map((row, i) => (
                <tr key={i} className="hover:bg-gray-100">
                  {row.map((val, j) => {
                    if (j === 1) {
                      // Meta em verde
                      return (
                        <td key={j} className="border px-4 py-2 text-center text-green-600 font-semibold bg-[#E6F4EA]">
                          {val}
                        </td>
                      );
                    } else if (j > 1) {
                      const meta = metas[row[0]];
                      const percentual = parseFloat(val || "0");
                      const isOutsideMeta = percentual < meta;
                      // Fora da meta em vermelho
                      return (
                        <td
                          key={j}
                          className={`border px-4 py-2 text-center ${isOutsideMeta ? 'text-red-600 bg-[#FFEBEB]' : 'text-green-600'}`}
                        >
                          {val ? `${val}%` : "-"}
                        </td>
                      );
                    }
                    return (
                      <td key={j} className="border px-4 py-2 text-left">
                        {val}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
