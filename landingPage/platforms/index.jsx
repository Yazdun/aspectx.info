import { Container } from 'components'
import css from './styles.module.css'
import {
  SiNintendoswitch,
  SiXbox,
  SiPcgamingwiki,
  SiPlaystation,
} from 'react-icons/si'
import { useTheme } from 'next-themes'

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
          const { title, icon, key, lightClr, darkClr } = platform
          return (
            <li
              key={key}
              className={css.platform}
              style={{ color: isDark ? darkClr : lightClr }}
            >
              {icon}
              {title}
            </li>
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
    key: 'Ah7^k',
  },
  {
    title: 'Xbox',
    icon: <SiXbox />,
    darkClr: '#70e000',
    lightClr: '#107C11',
    key: 'LkU%',
  },
  {
    title: 'Nintendo',
    icon: <SiNintendoswitch />,
    darkClr: '#e60012',
    lightClr: '#e60012',
    key: 'lK&v',
  },
  {
    title: 'PC Gaming',
    icon: <SiPcgamingwiki />,
    darkClr: '#dee2e6',
    lightClr: '#6c757d',
    key: 'Xe$#',
  },
]
