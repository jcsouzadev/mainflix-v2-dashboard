import pandas as pd
from sqlalchemy import create_engine
import os
from dotenv import load_dotenv
import argparse
import logging

# Configuração básica de logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def main():
    # Configurações via ambiente
    load_dotenv()
    DB_CONFIG = {
        'user': os.getenv('DB_USER'),
        'password': os.getenv('DB_PASSWORD'),
        'host': os.getenv('DB_HOST', 'localhost'),
        'port': os.getenv('DB_PORT', '5432'),
        'database': os.getenv('DB_NAME')
    }

    # Recebe caminho do Excel como argumento
    parser = argparse.ArgumentParser()
    parser.add_argument('excel_path', help='Caminho para o arquivo Excel')
    parser.add_argument('--sheet', default='BASE SAP', help='Nome da aba a ser lida')
    args = parser.parse_args()

    try:
        # Verificação da aba
        abas = pd.ExcelFile(args.excel_path).sheet_names
        if args.sheet not in abas:
            raise ValueError(f"A aba '{args.sheet}' não encontrada. Abas disponíveis: {abas}")

        # Leitura dos dados
        df = pd.read_excel(args.excel_path, sheet_name=args.sheet)
        
        # Validação básica
        if df.empty:
            raise ValueError("DataFrame vazio - nenhum dado para carregar")

        # Conexão e upload
        engine = create_engine(
            f'postgresql://{DB_CONFIG["user"]}:{DB_CONFIG["password"]}@'
            f'{DB_CONFIG["host"]}:{DB_CONFIG["port"]}/{DB_CONFIG["database"]}'
        )
        
        df.to_sql('base_sap', engine, if_exists='replace', index=False)
        logger.info(f"Dados carregados com sucesso! {len(df)} registros inseridos.")

    except Exception as e:
        logger.error(f"Erro durante a execução: {e}", exc_info=True)
        raise

if __name__ == '__main__':
    main()