# Sobre o desafio

Desafio de programação do processo seletivo para estágio da Tunts. O desafio de programação tem como objetivo principal a avaliação das habilidades de programação do candidato. Levando em conta não apenas o êxito de implementação da funcionalidade desejada, mas também uma análise da solução de forma estrutural, semântica e performática.

# Como rodar a aplicação

- Clone o repositório para a sua máquina ou faça o download do repositório zipado;
- Acesse o diretório da aplicação através do terminal;
- Recomendo que esteja com a [planilha](https://docs.google.com/spreadsheets/d/1V28aRL4tmisJRIET7mMaAbAR1MDg9DN6_neOoW-iThE/edit#gid=0) aberta para ver as modificações em tempo real.
- Rode o comando: `npm i` ou `npm install` para instalar as dependências. (É necessário ter o node instalado na sua máquina);
- Rode a aplicação através do comando `node src/index.js`

# Observações

Sei dos riscos que corro ao deixar o arquivo de credenciais num repositório público do GitHub, mas preferi deixar pra neste caso para facilitar o uso da aplicação.

# O desafio (enunciado original)

Criar uma aplicação em uma linguagem de programação de sua preferência (caso esteja se candidatando a uma vaga de linguagem de programação específica, exemplo: programador node.js, utilizar a linguagem/tecnologia específica da vaga). A aplicação deve ser capaz de ler uma planilha do google sheets, buscar as informações necessárias, calcular e escrever o resultado na planilha.

## REGRAS:

Calcular a situação de cada aluno baseado na média das 3 provas (P1, P2 e P3), conforme a tabela:

Média (m) | Situação
m<5 Reprovado por Nota
5<=m<7 Exame Final
m>=7 Aprovado

Caso o número de faltas ultrapasse 25% do número total de aulas o aluno terá a situação "Reprovado por Falta", independente da média.

Caso a situação seja "Exame Final" é necessário calcular a "Nota para Aprovação Final"(naf) de cada aluno de acordo com seguinte fórmula:
5 <= (m + naf)/2
Caso a situação do aluno seja diferente de "Exame Final", preencha o campo "Nota para Aprovação Final" com 0.

Arredondar o resultado para o próximo número inteiro (aumentar) caso necessário.

Utilizar linhas de logs para acompanhamento das atividades da aplicação.

Os textos do código fonte (atributos, classes, funções, comentários e afins) devem ser escritos em inglês, salvo os identificadores e textos pré-definidos nesse desafio.

O candidato deve especificar os comandos que devem ser utilizados para execução da aplicação. Exemplo de uma aplicação node.js:

1.             npm install
2.             npm start
    O candidato deve publicar o código fonte em um repositório git de sua preferência (exemplo: github, gitlab, bitbucket e etc).

## ENTREGÁVEIS

• Link público do repositório git escolhido;
• Comandos para rodar a aplicação;
• Link público da planilha copiada.

## REFERÊNCIA

Documentação da Google Sheets: [https://developers.google.com/sheets/api/guides/concepts](https://developers.google.com/sheets/api/guides/concepts)
