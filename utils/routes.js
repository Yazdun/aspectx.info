import { HiTrendingUp, HiCode } from 'react-icons/hi'
import { RiTrophyLine } from 'react-icons/ri'
import { FaUserNinja } from 'react-icons/fa'
import { BiRocket } from 'react-icons/bi'
import { IoPricetagOutline } from 'react-icons/io5'

export const Routes = [
  {
    title: 'trending',
    url: '/trending',
    icon: <HiTrendingUp />,
    key: 'ApEGH1gjlY',
    large: true,
  },
  {
    title: 'explore',
    url: '/explore',
    icon: <BiRocket />,
    key: 'b3VsuwE56E',
  },

  {
    title: 'developers',
    url: '/developers',
    icon: <FaUserNinja />,
    key: 'dLo96JGSMa',
  },
  {
    title: 'must play',
    url: '/mustplay',
    icon: <RiTrophyLine />,
    key: 'vSbuPnpljq',
  },
]
