
/*
Teste de Programação em JavaScript
Objetivo:
Desenvolver funções para lidar com problemas de cálculo, organização e normalização de dados, baseados em uma planilha de dados comerciais.

Instruções:
1. Leia as funções descritas abaixo.
2. Cada função resolve um problema relacionado aos dados fornecidos.
3. Complete as funções onde indicado.
4. No final do arquivo, há exemplos de execuçã1ão com os dados fornecidos.
*/

// Dados da planilha

/* 1. Matemática
 Objetivo: Converter o Valor do QueroBolsa para reais ou, converter o Valor da Faculdade para porcentagem respeitando as regras de  conversão de porcentagem.
 */
 const matematicaData = [{'Valor Cheio': 'R$  609,00', 'Valor Faculdade': 129, 'Valor QueroBolsa': 0.8199507389162561}, {'Valor Cheio': 'R$  609,00', 'Valor Faculdade': 129, 'Valor QueroBolsa': 0.8199507389162561}, {'Valor Cheio': 'R$  609,00', 'Valor Faculdade': 129, 'Valor QueroBolsa': 0.8199507389162561}, {'Valor Cheio': 'R$  609,00', 'Valor Faculdade': 129, 'Valor QueroBolsa': 0.8199507389162561}, {'Valor Cheio': 'R$  793,00', 'Valor Faculdade': 204, 'Valor QueroBolsa': 0.7813366960907945}, {'Valor Cheio': 'R$  793,00', 'Valor Faculdade': 438, 'Valor QueroBolsa': 0.5305170239596468}, {'Valor Cheio': 'R$  793,00', 'Valor Faculdade': 204, 'Valor QueroBolsa': 0.7813366960907945}, {'Valor Cheio': 'R$  793,00', 'Valor Faculdade': 397, 'Valor QueroBolsa': 0.5744640605296343}, {'Valor Cheio': 'R$  793,00', 'Valor Faculdade': 382, 'Valor QueroBolsa': 0.5905422446406052}, {'Valor Cheio': 'R$  793,00', 'Valor Faculdade': 438, 'Valor QueroBolsa': 0.5305170239596468}, {'Valor Cheio': 'R$  793,00', 'Valor Faculdade': 438, 'Valor QueroBolsa': 0.5305170239596468}, {'Valor Cheio': 'R$  793,00', 'Valor Faculdade': 382, 'Valor QueroBolsa': 0.5905422446406052}, {'Valor Cheio': 'R$  793,00', 'Valor Faculdade': 454, 'Valor QueroBolsa': 0.5133669609079445}, {'Valor Cheio': 'R$  793,00', 'Valor Faculdade': 378, 'Valor QueroBolsa': 0.5948297604035309}, {'Valor Cheio': 'R$  793,00', 'Valor Faculdade': 409, 'Valor QueroBolsa': 0.5616015132408576}, {'Valor Cheio': 'R$  793,00', 'Valor Faculdade': 397, 'Valor QueroBolsa': 0.5744640605296343}, {'Valor Cheio': 'R$  793,00', 'Valor Faculdade': 438, 'Valor QueroBolsa': 0.5305170239596468}, {'Valor Cheio': 'R$  793,00', 'Valor Faculdade': 468, 'Valor QueroBolsa': 0.49836065573770494}];

 /* 2. Valores em Sequência
 Objetivo: Devolver uma lista contendo todos os valores, separados por vírgula. Essa transformação deverá ser feita tanto para a chave Metadata quanto para a chave Nome do campus.
 */
 const valoresData = [{'Nome do campus': 'Anastácio', 'Metadata': 1703.0}, {'Nome do campus': 'Bela Vista de Goiás', 'Metadata': 1712.0}, {'Nome do campus': 'Bonito', 'Metadata': 1894.0}, {'Nome do campus': 'Brasília (Planaltina)', 'Metadata': 1848.0}, {'Nome do campus': 'Campo Grande (Cachoeira II)', 'Metadata': 1030.0}, {'Nome do campus': 'Campo Verde', 'Metadata': 1730.0}, {'Nome do campus': 'Confresa', 'Metadata': 1708.0}, {'Nome do campus': 'Dourados', 'Metadata': 1326.0}, {'Nome do campus': 'Goiânia', 'Metadata': 1001.0}];

 /* 3. Dicionário de Modalidades
 Objetivo: Os valores constituídos nas constante dicionarioErradoModalidade estão com alguns caracteres fora do comum. O objetivo é retirar apenas os caracteres que não fazem parte dos valores corretos.
 Valores corretos para a chave Modalidade: ["Presencial", "SemiPresencial"]
 */

 const dicionarioModalidades = {};
 const dicionarioErradoModalidade = ["Prese@nc1i2al", "SemiP@r=esenci21al"];

 /* 3. Dicionário de Graus
 Objetivo: Os valores constituídos na constante dicionarioErradoGrau estão com alguns caracteres fora do comum. O objetivo é retirar apenas os caracteres que não fazem parte dos valores corretos.
 Valores corretos para a chave Grau: ["Bacharelado", "Técnologo", "Licenciatura", "Especialização"]
 */
 const dicionarioGraus = {};
 const dicionarioErradoGrau = ["Ba4cha3re5lado]","Te{c]nólogo*", "~Licen]cia33tura", "Esp^eci5al1ização]"];

 /* 4. Cruzamento de Base
 Objetivo: A listaMetadatas contém os códigos dos polos da faculdade. A listaReferencia contém a informação completa para cada polo. O objetivo é relacionar as duas listas, de forma que o resultado contenha todas as informações de cada polo.
 */
 const listaMetadatas = [1703,1712,1894,1848,1030,1730,1708,1326,1001,1703,1712,1894,1848,1030,1730,1708,1326,1001,1703,1712,1894,1848,1030,1730,1708,1326];
 const listaReferencia = [
   { "codigo_polo": 1001, "nome_campus": "Goiânia", "id_querobolsa": 12355 },
   { "codigo_polo": 1730, "nome_campus": "Campo Verde", "id_querobolsa": 12456 },
   { "codigo_polo": 1712, "nome_campus": "Bela Vista de Goiás", "id_querobolsa": 509171 },
   { "codigo_polo": 1326, "nome_campus": "Dourados", "id_querobolsa": 12503 },
   { "codigo_polo": 1848, "nome_campus": "Brasília (Planaltina)", "id_querobolsa": 193851 },
   { "codigo_polo": 1030, "nome_campus": "Campo Grande (Cachoeira II)", "id_querobolsa": 12530 },
   { "codigo_polo": 1894, "nome_campus": "Bonito", "id_querobolsa": 12395 },
   { "codigo_polo": 1708, "nome_campus": "Confresa", "id_querobolsa": 19404 },
   { "codigo_polo": 1703, "nome_campus": "Anastácio", "id_querobolsa": 124081 }
 ];

 /* 5. Unicidade de Informações
 Objetivo: A lista chaveUnicaData contém informações sobre os cursos de uma faculdade, que podem ou não estar duplicados. O objetivo é deixar somente os registros únicos, removendo os registros dupicados.
 */
 const chaveUnicaData = [{'Id do Campus': 1703, 'Nome do Curso': 'Ciência da Computação', 'Preço': 100}, {'Id do Campus': 1712, 'Nome do Curso': 'Análise e Desenvolvimento de Sistemas', 'Preço': 198}, {'Id do Campus': 1001, 'Nome do Curso': 'Engenharia de Software', 'Preço': 209}, {'Id do Campus': 1703, 'Nome do Curso': 'Ciência da Computação', 'Preço': 105}, {'Id do Campus': 1001, 'Nome do Curso': 'Engenharia de Software', 'Preço': 209}, {'Id do Campus': 1712, 'Nome do Curso': 'Análise e Desenvolvimento de Sistemas', 'Preço': 198}, {'Id do Campus': 1001, 'Nome do Curso': 'Engenharia de Software', 'Preço': 220}, {'Id do Campus': 1712, 'Nome do Curso': 'Análise e Desenvolvimento de Sistemas', 'Preço': 240}, {'Id do Campus': 1703, 'Nome do Curso': 'Ciência da Computação', 'Preço': 100}, {'Id do Campus': 1712, 'Nome do Curso': 'Análise e Desenvolvimento de Sistemas', 'Preço': 198}, {'Id do Campus': 1001, 'Nome do Curso': 'Engenharia de Software', 'Preço': 209}, {'Id do Campus': 1703, 'Nome do Curso': 'Ciência da Computação', 'Preço': 105}, {'Id do Campus': 1001, 'Nome do Curso': 'Engenharia de Software', 'Preço': 209}, {'Id do Campus': 1712, 'Nome do Curso': 'Análise e Desenvolvimento de Sistemas', 'Preço': 198}, {'Id do Campus': 1001, 'Nome do Curso': 'Engenharia de Software', 'Preço': 220}, {'Id do Campus': 1712, 'Nome do Curso': 'Análise e Desenvolvimento de Sistemas', 'Preço': 240}, {'Id do Campus': 1703, 'Nome do Curso': 'Ciência da Computação', 'Preço': 100}, {'Id do Campus': 1712, 'Nome do Curso': 'Análise e Desenvolvimento de Sistemas', 'Preço': 198}, {'Id do Campus': 1001, 'Nome do Curso': 'Engenharia de Software', 'Preço': 209}, {'Id do Campus': 1703, 'Nome do Curso': 'Ciência da Computação', 'Preço': 105}, {'Id do Campus': 1001, 'Nome do Curso': 'Engenharia de Software', 'Preço': 209}, {'Id do Campus': 1712, 'Nome do Curso': 'Análise e Desenvolvimento de Sistemas', 'Preço': 198}, {'Id do Campus': 1001, 'Nome do Curso': 'Engenharia de Software', 'Preço': 220}, {'Id do Campus': 1712, 'Nome do Curso': 'Análise e Desenvolvimento de Sistemas', 'Preço': 240}, {'Id do Campus': 'Id do Campus', 'Nome do Curso': 'Nome do Curso', 'Preço': 'Preço'}];

 /*
 Funções a serem implementadas
 */

 // 1. Calcular valor final com descontos
 function calcularValorFinal(valorCheio, descontoFaculdade, descontoQueroBolsa) {
     return // TODO: Calcular o valor final e a economia total
 }

 // 2. Associar campus com metadados
 function associarCampus(valores) {
     return // TODO: Criar uma lista associando campus com metadados
 }

 // 3. Normalizar valores de modalidades e graus
 function normalizarValores(valores, dicionario) {
     return // TODO: Substituir os valores pelos padronizados no dicionário
 }

 // 4. Cruzamento de bases internas e externas
 function cruzarBases(interno, externo) {
     return  // TODO: Relacionar bases internas e externas
 }

 // 5. Gerar chave única
 function gerarChavesUnicas(dados) {
     return // TODO: Criar uma chave única no formato idCampus-nomeCurso-preco
 }

 /*
 Testes
 */

 console.log("Teste 1: Calcular Valor Final");
 matematicaData.forEach(item => {
     console.log(calcularValorFinal(item['Valor Cheio'], item['Valor Faculdade'], item['Valor QueroBolsa']));
 });

 console.log("\nTeste 2: Associar Campus");
 console.log(associarCampus(valoresData));

 console.log("\nTeste 3: Normalizar Modalidades");
 console.log(normalizarValores(Object.keys(dicionarioModalidades), dicionarioModalidades));

 console.log("\nTeste 4: Cruzar Bases");
 console.log(cruzarBases(cruzamentoInterno, cruzamentoExterno));

 console.log("\nTeste 5: Gerar Chaves Únicas");
 console.log(gerarChavesUnicas(chaveUnicaData));
