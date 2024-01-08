---
title: CryptoGuardian
publishDate: 2023-12-02 20:00:00
img: /assets/crypto-guardian.png
img_alt: imagem com 'crypto guardian' escrito no meio e um simbolo passando ideia futurista ao lado inferior direito da escrita.
description: |
  API desenvolvida com o intuito de facilitar transações com moedas físicas para moedas digitais, especificamente Ethereum. Basta passar o valor mínimo e máximo que você tem disponível para fazer a transação e a API vai validar a transação como true (possível de ser feita) e false (impossível de ser feita). É uma API de validação que atrelada a um front-end previamente configurado, tem muito poder!

tags:
  - Node.js
  - API
  - Criptomoedas
---

## Crypto Guardian Project

Documentação da API de validação

```http
  GET /api/v1/transaction
```

| Parâmetro  | Tipo     | Descrição                                   |
| :--------- | :------- | :------------------------------------------ |
| `bidValue` | `string` | Valor de compra em atual do ethereum em BRL |

Retorna um item

```http
  POST /api/v1/transaction
```

| Parâmetro       | Tipo     | Descrição                                                                                        |
| :-------------- | :------- | :----------------------------------------------------------------------------------------------- |
| `rangeBidValue` | `string` | **Obrigatório**. O range financeiro que a empresa disponibiliza para a operação Ex.: 10000-15000 |

### Links

- [Documentação Postman](https://documenter.getpostman.com/view/27634188/2s9YeK4pvV)
- [Código Fonte](https://github.com/marcelldac/crypto_guardian_api)
