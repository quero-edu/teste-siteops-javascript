# Teste de Analista de Operações(siteops) em JavaScript

Este repositório contém um teste de programação em JavaScript voltado para resolver problemas relacionados à manipulação, organização e normalização de dados baseados em uma planilha comercial. O objetivo é implementar funções específicas e validá-las utilizando os conjuntos de dados fornecidos.

## Objetivos
1. Desenvolver funções para lidar com cálculos, organização e normalização de dados.
2. Trabalhar com conjuntos de dados realistas, transformando e extraindo informações conforme necessário.
3. Implementar soluções para cenários descritos no enunciado.

## Estrutura dos Dados
Os dados incluem:
- **Cálculos Matemáticos**: Conversões entre valores monetários e porcentagens.
- **Valores Sequenciados**: Extração e formatação de campos específicos.
- **Normalização**: Limpeza de valores incorretos em categorias como "Modalidades" e "Graus".
- **Relacionamento de Dados**: Combinação de datasets utilizando identificadores únicos.
- **Informações Únicas**: Remoção de entradas duplicadas em um conjunto de dados.

## Funções a Implementar
As funções a seguir precisam ser completadas:
1. **`calcularValorFinal`**: Calcula o valor final com base nos descontos fornecidos e determina o total economizado.
2. **`associarCampus`**: Cria uma lista associando os campi com seus metadados.
3. **`normalizarValores`**: Substitui valores incorretos pelos corretos utilizando um dicionário.
4. **`cruzarBases`**: Relaciona dois conjuntos de dados, combinando-os com base em identificadores comuns.
5. **`gerarChavesUnicas`**: Gera chaves únicas para as entradas do dataset no formato `idCampus-nomeCurso-preco`.

## Conjuntos de Dados
Os principais conjuntos de dados fornecidos incluem:
- Dados para cálculos matemáticos (`matematicaData`)
- Valores de metadados e campi (`valoresData`)
- Dicionários corretos e incorretos para modalidades e graus
- Conjuntos de dados internos e externos para cruzamento
- Entradas duplicadas para deduplicação

## Como Usar
1. Certifique-se de que você tem o [Node.js](https://nodejs.org) instalado em sua máquina.
2. Clone este repositório:
   ```bash
   git clone <url_do_repositorio>
   cd <nome_do_repositorio>
3. Abra o arquivo test.js em seu editor de código favorito.
4. Complete as funções marcadas como TODO.
5. Execute o código para validar suas soluções:
    ```bash
      node test.js
