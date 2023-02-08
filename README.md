# Desafio Ailos

### Modo de execução

- Baixar as dependencias da aplicação com **npm install**
- Executar **npx json-server --watch db.json** para rodar o banco de dados json em um cmd
- Executar **npm start** para rodar a aplicação


### Aplicação

- CPF valido: **4245680033**

- Após a instalação e subir aplicação, será aberto uma tela pedindo para informar um cpf valido para pesquisa de um futuro cooperador(a)

- Contendo uma caixa de texto com e um botão de consulta

- O campo do cpf é verificado automaticamente se é um cpf valido ou não, assim retornando na tela caso não for um cpf valido

- Após clicar no botão de consulta retornara um card informando o nome da pessoa **Mariane de Sousa Oliveira** e se o cpf está **Regular**.

- Mas caso for um cpf valido e não estiver na base de dados retonara um mensagem informando.