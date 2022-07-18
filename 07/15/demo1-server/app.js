const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.all('/', (req, res) => {
  res.send('OK')
})

const json = {
  "name":
  "hutswa Token List",
  "logoURI":
  "https://www.hutswap.org/static/img/img7.png",
  "keywords": [
    "HUT",
    "default",
    "list"
  ],
  "timestamp":
  "2022-06-01T00:00:00+00:00",
  "tokens": [
    {
      "chainId":
      56,
      "address":
      "0x55d398326f99059ff775485246999027b3197955",
      "symbol":
      "USDT",
      "name":
      "TetherUSD",
      "decimals":
      18,
      "logoURI":
      "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png"
    },
    {
      "chainId":
      56,
      "address":
      "0x11009a76e5457390e58d9672604ac65fa404b849",
      "symbol":
      "HUT",
      "name":
      "HUT",
      "decimals":
      18,
      "logoURI":
      "https://www.hutswap.org/static/img/img7.png"
    },
    {
      "chainId":
      56,
      "address":
      "0xceb03b7cb2a6943e0ff48e21eb5779eea365526c",
      "symbol":
      "HUT1",
      "name":
      "HUT1",
      "decimals":
      18,
      "logoURI":
      "https://www.hutswap.org/static/img/img7.png"
    }
  ],
  "version": {
    "major":
    1,
    "minor":
    0,
    "patch":
    0
  }
}

app.get('/api/data1',(req,res)=>{
  res.send(json)
})

app.listen(4000, () => {
  console.log('net')
})