import { serializeTokens } from 'utils/serializeTokens'
import { bscTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens(bscTokens)

export const CAKE_BNB_LP_MAINNET = '0x4Ec67A8AFFC0d7F0f765A31ae65815ba4C9CE1a8'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    v1pid: 0,
    lpSymbol: 'OVE',
    lpAddresses: {
      97: '0x0d5556E58862A21db65B4Aa180da231cfE6140fE',
      56: '0x4Ec67A8AFFC0d7F0f765A31ae65815ba4C9CE1a8',
    },
    AprlpAddresses: {
      97: '0x0d5556E58862A21db65B4Aa180da231cfE6140fE',
      56: '0x0d5556E58862A21db65B4Aa180da231cfE6140fE',
    },
    token: serializedTokens.ove,
    quoteToken: serializedTokens.ove,
  },
  {
    pid: 1,
    v1pid: 1,
    lpSymbol: 'OVE-BNB LP',
    lpAddresses: {
      97: '0x4Ec67A8AFFC0d7F0f765A31ae65815ba4C9CE1a8',
      56: CAKE_BNB_LP_MAINNET,
    },
    AprlpAddresses: {
      97: '0x4Ec67A8AFFC0d7F0f765A31ae65815ba4C9CE1a8',
      56: CAKE_BNB_LP_MAINNET,
    },

    token: serializedTokens.ove,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    v1pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    AprlpAddresses: {
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 3,
    v1pid: 3,
    lpSymbol: 'OVE-BUSD LP',
    lpAddresses: {
      97: '0x952BEDC8737beB0850871f67EbdBAC2719d36323',
      56: '0x952BEDC8737beB0850871f67EbdBAC2719d36323',
    },
    AprlpAddresses: {
      97: '0x952BEDC8737beB0850871f67EbdBAC2719d36323',
      56: '0x952BEDC8737beB0850871f67EbdBAC2719d36323',
    },
    token: serializedTokens.ove,
    quoteToken: serializedTokens.busd,
  },
  
]

export default farms
