import pandas as pd
from sqlalchemy import create_engine

# Credenciais do PostgreSQL
usuario = "postgres"
senha = "1w3e5tYU"
host = "localhost"
porta = "5432"
banco = "mainflix_v2"

# Caminho do Excel
excel_path = r'C:\Users\joyce\Downloads\BD Bom Jesus\Indicadores de Desempenho da Manutenção Master.xlsx'
aba_desejada = 'BASE SAP'

try:
    # Verifica se a aba 'BASE SAP' existe antes de tentar ler
    abas = pd.ExcelFile(excel_path).sheet_names
    if aba_desejada not in abas:
        raise ValueError(f"A aba '{aba_desejada}' não foi encontrada no arquivo Excel. Abas disponíveis: {abas}")

    # Ler apenas a aba correta
    df = pd.read_excel(excel_path, sheet_name=aba_desejada)

    # Criar conexão com PostgreSQL
    engine = create_engine(f'postgresql://{usuario}:{senha}@{host}:{porta}/{banco}')

    # Substituir ou criar a tabela
    df.to_sql('base_sap', engine, if_exists='replace', index=False)

    print("Dados carregados com sucesso!")

except Exception as e:
    print(f"Ocorreu um erro: {e}")
