// src/components/sidebar.tsx
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
  ClipboardList
} from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
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
      name: 'Técnicos', 
      href: '#', 
      icon: <User size={18} />,
      disabled: true 
    },
    { 
      name: 'Gestores', 
      href: '#', 
      icon: <Users size={18} />,
      disabled: true 
    },
  ];

  return (
    <div className="w-64 h-screen bg-[#152340] text-white p-4 flex flex-col">
      {/* Cabeçalho */}
      <div className="mb-8">
        <h1 className="text-xl font-bold">Mainflix V2</h1>
        <p className="text-sm text-gray-300 mt-1">Gestão de Manutenção</p>
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
                ? 'text-gray-500 cursor-not-allowed'
                : 'text-gray-200 hover:bg-[#025939] hover:text-white hover:shadow-md'
            }`}
          >
            <span className={`mr-3 ${
              pathname === item.href ? 'text-white' : 'text-gray-300'
            }`}>
              {item.icon}
            </span>
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Área de upload (opcional) */}
      <div className="mt-auto pt-4 border-t border-[#1E3A8A]">
        <div className="mb-3 text-sm text-gray-300 flex items-center">
          <Database className="mr-2" size={16} />
          Importar dados
        </div>
        <button className="w-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white py-2 px-3 rounded-lg text-sm flex items-center justify-center transition-colors">
          <Upload className="mr-2" size={16} />
          Carregar planilha
        </button>
      </div>
    </div>
  );
}