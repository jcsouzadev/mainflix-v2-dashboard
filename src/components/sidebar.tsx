'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Settings, 
  Calendar, 
  User, 
  Users,
  Upload,
  Database,
  HardDrive,
  ClipboardList,
  BarChart3
} from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { 
      name: 'Dashboard de Manutenção', 
      href: '/dashboard/dms1', // Novo link para o dashboard
      icon: <BarChart3 size={18} />, // Pode mudar o ícone conforme desejado
      disabled: false 
    },
    { 
      name: 'Gestão', 
      href: '/dashboard/principal',
      icon: <ClipboardList size={18} />,
      disabled: false 
    },
    { 
      name: 'Equipamentos', 
      href: '/dashboard/equipamento', 
      icon: <HardDrive size={18} />,
      disabled: false 
    },
    { 
      name: 'Indicadores', 
      href: '/dashboard/indicadores', 
      icon: <BarChart3 size={18} />, 
      disabled: false 
    },
    { 
      name: 'Técnicos', 
      href: '#', 
      icon: <User size={18} />,
      disabled: true 
    },
    { 
      name: 'Gestores', 
      href: '/dashboard/base_sap', 
      icon: <Users size={18} />,
      disabled: true 
    },
    { 
      name: 'Base', 
      href: '#', 
      icon: <Database size={18} />,
      disabled: true 
    },
  ];

  return (
    <div className="w-64 h-screen bg-[#e8eaed] text-white p-4 flex flex-col">
      {/* Cabeçalho */}
      <div className="mb-8">
        <h1 className="text-xl font-bold text-black">Mainflix V2</h1>
        <p className="text-sm text-black mt-1">Gestão de Manutenção</p>
      </div>
     
      {/* Menu principal */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.disabled ? '#' : item.href}
            className={`flex items-center p-3 rounded-lg transition-all ${
              pathname === item.href
                ? 'bg-[#027333] text-white shadow-lg'
                : item.disabled
                ? 'text-black cursor-not-allowed'
                : 'text-black hover:bg-[#025939] hover:text-white hover:shadow-md'
            }`}
          >
            <span className={`mr-3 ${
              pathname === item.href ? 'text-white' : 'text-black'
            }`}>
              {item.icon}
            </span>
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Área de upload */}
      <div className="mt-auto pt-4 border-t border-[#025939]">
        <div className="mb-3 text-sm text-black flex items-center">
          <Database className="mr-2" size={16} />
          Importar dados
        </div>
        <button className="w-full bg-[#025939] hover:bg-[#025939] text-white py-2 px-3 rounded-lg text-sm flex items-center justify-center transition-colors">
          <Upload className="mr-2" size={16} />
          Carregar planilha
        </button>
      </div>
    </div>
  );
}

