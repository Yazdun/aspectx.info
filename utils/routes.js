import { HiTrendingUp, HiCode } from 'react-icons/hi'
import { RiTrophyLine } from 'react-icons/ri'
import { CgShoppingCart } from 'react-icons/cg'
import { FaUserNinja } from 'react-icons/fa'
import { BiRocket } from 'react-icons/bi'
import { IoPricetagOutline, IoGameControllerOutline } from 'react-icons/io5'

export const Routes = [
  {
    title: 'trending',
    url: '/',
    icon: <HiTrendingUp />,
    key: 'ApEGH1gjlY',
    large: true,
  },
  {
    title: 'explore',
    url: '/',
    icon: <BiRocket />,
    key: 'b3VsuwE56E',
  },
  {
    title: 'new releases',
    url: '/',
    icon: <IoPricetagOutline />,
    key: '1j9GU2fbmm',
  },
  {
    title: 'platforms',
    url: '/',
    icon: <IoGameControllerOutline />,
    key: 'OLbuBnp2jH',
  },
  {
    title: 'developers',
    url: '/',
    icon: <FaUserNinja />,
    key: 'dLo96JGSMa',
  },
  {
    title: 'must play',
    url: '/',
    icon: <RiTrophyLine />,
    key: 'vSbuPnpljq',
  },
  {
    title: 'stores',
    url: '/',
    icon: <CgShoppingCart />,
    key: 'xPQ7WpTsTf',
  },
  {
    title: 'studios',
    url: '/',
    icon: <HiCode />,
    key: 'A0WUKC6mWt',
  },
]
