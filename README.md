<img src="https://blinktrade.com/assets/img/logo-p-white.png" width="110px" align="left"/>

# Blinktrade bot

Um bot para receber e armazerar dados da API blinktrade BITCOIN

## Descrição

Esta aplicação utiliza a biblioteca [BlinkTrade-JS](https://github.com/blinktrade/BlinkTradeJS)

## Como usar

Primeiro, Clone o repositorio

```bash
git clone https://github.com/brunooomelo/blinktrade-bot
```

blinktrade bot precisa da instalação de suas dependencias,
então instale:

```bash
npm install
```

### Configuração

Após todos os passos acima, você ira criar um arquivo `.env` 
na pasta raiz do projeto, com as configurações de exemplo do arquivo
`.env-example`


```
BROKERID= (1=SurBitcoin|3=VBTC|4=FoxBit|5=Testnet|8=UrduBit|9=ChileBit)
APIKEY= REFERENTE A CONTA CRIADA
APIPASS= REFERENTE A CONTA CRIADA
SYMBOLSBTC= (BTCVEF | BTCVND | BTCBRL | BTCPKR | BTCCLP )
ERRORFOLDER=ERROR
LOGSFOLDER=DATA
```
Qualquer duvida sobre configuração utilize a [documentação](https://blinktrade.com/docs/)

### Utilizando

Após todas as configurações corretas, vamos ao gran finale, rode:
```bash
npm start
```

e veja na pasta `DATA`, os logs de cada transação feita. Duvida consulte [aqui](https://blinktrade.com/docs/#subscribe-to-orderbook)
caso algum erro, verifique a pasta `ERROR`

## Licença

```
The MIT License (MIT)
Copyright (c) 2017
```
