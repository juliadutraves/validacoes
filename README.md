# Validações

## Indice
* [Sobre o projeto](#sobre-o-projeto)
* [Vídeos](#vídeos)
* [Recurso](#recursos)
* [Funcionalidades](#funcionalidades)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Sobre o projeto

Este projeto fornece uma solução simples para validação de CPF (Cadastro de Pessoas Físicas) e endereços de e-mail usando JavaScript. Ele inclui exemplos práticos de como implementar a validação diretamente no navegador, garantindo que os dados inseridos pelos usuários estejam corretos antes do envio de formulários.

## Vídeos

E-mail:

![tela-email-validacoes](https://github.com/user-attachments/assets/eceba4e3-6361-427c-8045-d3b2dcef758a)

CPF:

![tela-cpf-validacoes (1)](https://github.com/user-attachments/assets/c52b20af-0bf8-4e43-8235-6773a1c7fd29)


## Recursos
- Validar CPF existentes
- Validar E-mail

## Funcionalidades

- Validação de CPF
Objetivo: Garantir que o número de CPF inserido seja válido e siga o formato correto.

Como Funciona:
Remove caracteres não numéricos do CPF.
Verifica se o CPF contém exatamente 11 dígitos e não consiste apenas de números iguais.
Calcula e valida os dígitos verificadores utilizando o algoritmo padrão do CPF.

- Validação de E-mail
Objetivo: Verificar se o e-mail inserido possui um formato válido.

Como Funciona:
Utiliza uma expressão regular para validar a estrutura do e-mail.
Verifica a presença dos caracteres obrigatórios (@ e .) e a estrutura geral do e-mail.

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript