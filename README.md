# Gerador de QR Code

Script simples em Node.js que gera um QR code em PNG a partir de um texto.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (verifique com `node --version`)

## Instalação

Dentro da pasta do projeto, instale as dependências:

```
npm install
```

## Uso

```
node gerar_qrcode.js "texto ou url" -o nome_do_arquivo.png
```

- `"texto ou url"` — o conteúdo que será codificado no QR code (obrigatório)
- `-o` — nome do arquivo de saída (opcional). Se omitido, salva como `qrcode.png`

### Exemplos

Gerar QR code com nome padrão (`qrcode.png`):

```
node gerar_qrcode.js "https://exemplo.com"
```

Gerar QR code com nome de arquivo customizado:

```
node gerar_qrcode.js "https://exemplo.com" -o meu_qrcode.png
```

Codificar um texto qualquer (não precisa ser uma URL):

```
node gerar_qrcode.js "Olá, mundo!" -o ola.png
```

## Erros comuns

- **Texto vazio:** o script exibe uma mensagem de erro e não gera arquivo.
- **Falha ao salvar:** se o caminho informado em `-o` for inválido (ex: pasta inexistente), o script exibe o erro e encerra.
