## Projeto fluxo de autenticação do JWT

Seguindo o conteúdo didático do vídeo do Guilherme Rodz onde ele explica como criar uma aplicação que se aplica o JWT ou JsonWebToken e explica seu fluxo e features que dá para implementar tendo em mão o token.

## Contextualização sobre JWT
Padrão definido pela RFC 7519 que diz como transmitir e armazenar de forma compacta segura objetos JSON entre aplicações.

## Explicação da Aplicação
### Aplicação com 3 rotas: 
<br>1 -> Criação de usuário encriptação da senha digitada e registro no banco de dados (banco utilizado no projeto MongoDB)
<br>2 -> Login e atribuição do JWT
<br>3 -> Rota de identificação para o usuario logado e aprovado, só permitida com JWT correto