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
  },
  {
    title: 'indie',
    icon: <IoExtensionPuzzle />,
  },
  {
    title: 'adventure',
    icon: <MdOutlineBackpack />,
  },
  {
    title: 'rpg',
    icon: <GiCrossedSwords />,
  },
  {
    title: 'shooter',
    icon: <GiPistolGun />,
  },
  {
    title: 'racing',
    icon: <BsSpeedometer2 />,
  },
  {
    title: 'massively multiplayer',
    icon: <FaUsers />,
  },
  {
    title: 'sports',
    icon: <RiFootballFill />,
  },
  {
    title: 'fighting',
    icon: <RiBoxingLine />,
  },
]
