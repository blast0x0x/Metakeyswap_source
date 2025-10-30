import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  NftIcon,
  NftFillIcon,
  MoreIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { perpTheme } from 'utils/getPerpetualTheme'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'
import { ChainId } from '@pancakeswap/sdk'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (t: ContextApi['t'], isDark: boolean, languageCode?: string, chainId?: number) => ConfigMenuItemsType[] =
  (t, isDark, languageCode, chainId) =>
    [
      {
        label: t('Swap'),
        icon: SwapIcon,
        fillIcon: SwapFillIcon,
        href: '/swap',
        showItemsOnMobile: false,
        supportChainIds: [ChainId.BSC],
        items: [
        
        ],
      },
       {
        label: t('Liquidity'),
        icon: SwapIcon,
        fillIcon: SwapFillIcon,
        href: '/liquidity',
        showItemsOnMobile: false,
        supportChainIds: [ChainId.BSC],
        items: [
        
        ],
      },
      {
        label: t('Limit'),
        icon: SwapIcon,
        supportChainIds: [ChainId.BSC],
        href: '/limit-orders',
        showItemsOnMobile: false,
        image: '/images/decorations/3d-coin.png',
        items: [
        
        ],
      },

      {
        label: t('Farms'),
        href: '/farms',
        icon: EarnIcon,
        fillIcon: EarnFillIcon,
        supportChainIds: [ChainId.BSC],
        showItemsOnMobile: false,
        image: '/images/decorations/pe2.png',
        items: [
          
        ],
      },
      {
        label: t('Pools'),
        href: '/pools',
        icon: EarnIcon,
        showItemsOnMobile: false,
        fillIcon: EarnFillIcon,
        supportChainIds: [ChainId.BSC],
        image: '/images/decorations/pe2.png',
        items: [
        
        ],
      },
      // {
      //   label: t('Launch'),
      //   href: '/launch',
      //   icon: EarnIcon,
      //   fillIcon: EarnFillIcon,
      //   showItemsOnMobile: false,
      //   supportChainIds: [ChainId.BSC],
      //   image: '/images/decorations/pe2.png',
      //   items: [
        
      //   ],
      // },
    
      // {
      //   label: t('NFT'),
      //   href: `${nftsBaseUrl}`,
      //   icon: NftIcon,
      //   showItemsOnMobile: false,
      //   fillIcon: NftFillIcon,
      //   supportChainIds: [ChainId.BSC],
      //   image: '/images/decorations/nft.png',
      //   items: [
        
      //   ],
      // },
      
      // {
      //   label: t('Lottery'),
      //   href: '/lottery',
      //   icon: EarnIcon,
      //   showItemsOnMobile: false,
      //   fillIcon: EarnFillIcon,
      //   supportChainIds: [ChainId.BSC],
      //   image: '/images/decorations/lottery.png',
      //   items: [
        
      //   ],
      // },
      {
        label: 'More',
        href: '/',
        icon: MoreIcon,
        showItemsOnMobile: false,
        hideSubNav: true,
        items: [
          // {
          //   label: t('Audit'),
          //   href: 'https://github.com/cyberscope-io/audits/blob/main/2-mk/audit.pdf',
          //   type: DropdownMenuItemType.EXTERNAL_LINK,
          // },
      
          {
            label: t('Twitter'),
            href: 'https://x.com/MetaKeySwap',
            type: DropdownMenuItemType.EXTERNAL_LINK,
          },
         
          {
            label: t('Telegram'),
            href: 'https://t.me/metakeyswapgroup',
            type: DropdownMenuItemType.EXTERNAL_LINK,
          },
        ]
      },
    ]

export default config


