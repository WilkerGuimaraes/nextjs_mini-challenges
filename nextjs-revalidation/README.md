# Revalidar Dados

A revalidação é o processo de limpar o cache de dados e buscar novamente os dados mais recentes. Este projeto foi desenvolvido afim de mostrar como este processo funciona na prática apresentando um formulário de cadastro de usuários.

## Funcionamento

- Através das informações inseridas no formulário, os dados do novo usuário serão cadastrados na API do `json-server`.
- Assim que o novo usuário for cadastrado e após um delay de 1.5 segundos, o cache de dados será atualizado e renderizado em tela através da "revalidação sob demanda" usando a função `revalidateTag`.
- Para visualizar a ação da função `revalidatePath` é necessário realizar uma atualização manual nos dados do `server.json`, para que assim o Next faça mais uma busca de dados.
