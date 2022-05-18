import { Container } from 'components'
import css from './styles.module.css'
import {
  SiNintendoswitch,
  SiXbox,
  SiPcgamingwiki,
  SiPlaystation,
} from 'react-icons/si'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { isBrowser } from 'react-device-detect'

export const Platforms = () => {
  const { theme } = useTheme()
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)

  return (
    <Container gap>
      <ul className={css.list}>
        {data.map(platform => {
          const { title, icon, key, lightClr, darkClr, animDelay } = platform
          return (
            <motion.li
              key={key}
              className={css.platform}
              style={{ color: isDark ? darkClr : lightClr }}
              initial={{ opacity: 0, y: 100, scale: 0 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: isBrowser ? animDelay : 0 }}
            >
              {icon}
              {title}
            </motion.li>
          )
        })}
      </ul>
    </Container>
  )
}

const data = [
  {
    title: 'PlayStation',
    icon: <SiPlaystation />,
    darkClr: '#00a6fb',
    lightClr: '#006FCD',
    animDelay: 0,
    key: 'Ah7^k',
  },
  {
    title: 'Xbox Series X/S',
    icon: <SiXbox />,
    darkClr: '#70e000',
    lightClr: '#107C11',
    animDelay: 0.2,
    key: 'LkU%',
  },
  {
    title: 'Nintendo Switch',
    icon: <SiNintendoswitch />,
    darkClr: '#e60012',
    lightClr: '#e60012',
    animDelay: 0.4,
    key: 'lK&v',
  },
  {
    title: 'PC Gaming',
    icon: <SiPcgamingwiki />,
    darkClr: '#dee2e6',
    lightClr: '#6c757d',
    animDelay: 0.6,
    key: 'Xe$#',
  },
]
