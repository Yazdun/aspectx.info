import { RiBoxingLine, RiFootballFill } from 'react-icons/ri'
import { FaUsers } from 'react-icons/fa'
import { BsSpeedometer2 } from 'react-icons/bs'
import { MdOutlineBackpack } from 'react-icons/md'
import { IoExtensionPuzzle } from 'react-icons/io5'
import { GiPistolGun, GiCrossedSwords, GiShotgunRounds } from 'react-icons/gi'

export const Genres = [
  {
    title: 'action',
    icon: <GiShotgunRounds />,
    id: 4,
  },
  {
    title: 'indie',
    icon: <IoExtensionPuzzle />,
    id: 51,
  },
  {
    title: 'adventure',
    icon: <MdOutlineBackpack />,
    id: 3,
  },
  {
    title: 'rpg',
    icon: <GiCrossedSwords />,
    id: 5,
  },
  {
    title: 'shooter',
    icon: <GiPistolGun />,
    id: 2,
  },
  {
    title: 'racing',
    icon: <BsSpeedometer2 />,
    id: 1,
  },
  {
    title: 'massively multiplayer',
    icon: <FaUsers />,
    id: 59,
  },
  {
    title: 'sports',
    icon: <RiFootballFill />,
    id: 15,
  },
  {
    title: 'fighting',
    icon: <RiBoxingLine />,
    id: 6,
  },
]
