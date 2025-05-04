import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Configuração do Turbopack (estável)
  turbopack: {
    resolveAlias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  // Configuração para Server Actions (substitui allowedDevOrigins)
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000']
    }
  },
  // Mantenha o Webpack apenas se necessário para compatibilidade
  webpack: (config) => {
    config.resolve ??= {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
};

export default nextConfig;