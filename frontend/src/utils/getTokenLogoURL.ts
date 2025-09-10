import { ChainId, Token } from '@pancakeswap/sdk'

const mapping = {
  [ChainId.BSC]: 'smartchain',
  [ChainId.ETHEREUM]: 'ethereum',
}

const getTokenLogoURL = (token?: Token) => {
  if (token.address === "0xCDAf21b8d0f7c17010626c18C81663f6c38D724c") {
    return "/images/tokens/0xCDAf21b8d0f7c17010626c18C81663f6c38D724c.png"
  } else if (token && mapping[token.chainId]) {
    return `https://assets-cdn.trustwallet.com/blockchains/${mapping[token.chainId]}/assets/${token.address}/logo.png`
  }
  return null
}

export default getTokenLogoURL
