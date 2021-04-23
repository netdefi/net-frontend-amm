import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://master.d3fzvs9fvbhvcn.amplifyapp.com/'
  },{
    label: 'Referral',
    icon: 'ReferralIcon',
    href: 'https://master.d3fzvs9fvbhvcn.amplifyapp.com/referral',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://master.d3fzvs9fvbhvcn.amplifyapp.com/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://master.d3fzvs9fvbhvcn.amplifyapp.com/nests'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.netdefi.com/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xD90eAD48B86955552EC264266CADaecF8e17d6A6',
      },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/net-finance/',
      // },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0xD90eAD48B86955552EC264266CADaecF8e17d6A6',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/netdefi/",
      },
      {
        label: "Docs",
        href: "https://netdefi.gitbook.io/net-finance/",
      },
      {
        label: "Blog",
        href: "https://netfinance.medium.com/",
      },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.netdefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/net-finance',
  // },
]

export default config
