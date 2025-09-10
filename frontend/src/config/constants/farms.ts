import { serializeTokens } from 'utils/serializeTokens'
import { bscTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens(bscTokens)

export const CAKE_BNB_LP_MAINNET = '0x2B0D73609c14336546Ae66869cf11FeDe1B6599e'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    v1pid: 0,
    lpSymbol: 'MK',
    lpAddresses: {
      97: '0xCDAf21b8d0f7c17010626c18C81663f6c38D724c',
      56: '0x2B0D73609c14336546Ae66869cf11FeDe1B6599e',
    },
    AprlpAddresses: {
      97: '0xCDAf21b8d0f7c17010626c18C81663f6c38D724c',
      56: '0xCDAf21b8d0f7c17010626c18C81663f6c38D724c',
    },
    token: serializedTokens.mk,
    quoteToken: serializedTokens.mk,
  },
  {
    pid: 1,
    v1pid: 1,
    lpSymbol: 'MK-BNB LP',
    lpAddresses: {
      97: '0x2B0D73609c14336546Ae66869cf11FeDe1B6599e',
      56: CAKE_BNB_LP_MAINNET,
    },
    AprlpAddresses: {
      97: '0x2B0D73609c14336546Ae66869cf11FeDe1B6599e',
      56: CAKE_BNB_LP_MAINNET,
    },

    token: serializedTokens.mk,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    v1pid: 2,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
      56: '0x830eCFe7cD92eEAf5fe6E3D8e21c7Abd65d446a4',
    },
    AprlpAddresses: {
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
      56: '0x830eCFe7cD92eEAf5fe6E3D8e21c7Abd65d446a4',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 3,
    v1pid: 3,
    lpSymbol: 'MK-USDT LP',
    lpAddresses: {
      97: '0xfe6F6eed44D8fA128F852F2Fc69A16E4a99B3A09',
      56: '0xfe6F6eed44D8fA128F852F2Fc69A16E4a99B3A09',
    },
    AprlpAddresses: {
      97: '0xfe6F6eed44D8fA128F852F2Fc69A16E4a99B3A09',
      56: '0xfe6F6eed44D8fA128F852F2Fc69A16E4a99B3A09',
    },
    token: serializedTokens.mk,
    quoteToken: serializedTokens.usdt,
  },
  
]

export default farms
