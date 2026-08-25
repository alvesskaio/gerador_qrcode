#!/usr/bin/env node
const QRCode = require("qrcode");

function parseArgs(argv) {
  const args = { texto: null, output: "qrcode.png" };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "-o" || arg === "--output") {
      args.output = argv[++i];
    } else if (args.texto === null) {
      args.texto = arg;
    }
  }
  return args;
}

async function main() {
  const argv = process.argv.slice(2);
  const { texto, output } = parseArgs(argv);

  if (!texto || !texto.trim()) {
    console.error("Erro: informe o texto a ser codificado.");
    console.error('Uso: node gerar_qrcode.js "texto" [-o saida.png]');
    process.exit(1);
  }

  try {
    await QRCode.toFile(output, texto);
    console.log(`QR code salvo em: ${output}`);
  } catch (err) {
    console.error(`Erro ao salvar o arquivo '${output}': ${err.message}`);
    process.exit(1);
  }
}

main();
