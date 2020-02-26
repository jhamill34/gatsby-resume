import { Theme } from 'theme-ui'
import { SystemStyleObject } from '@styled-system/css'

type LinkVariants = {
  links: {
    [key: string]: SystemStyleObject
  }
}

const theme: Theme & LinkVariants = {
  fonts: {
    body: 'Helvetica, sans-serif',
    heading: 'Helvetica, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  fontSizes: [8, 10, 12, 14, 18, 24, 32],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    background: '#FFFFFF',
    text: '#303030',
    primary: '#0E604C',
    secondary: '#0E565F',
    muted: '#585858',
  },
  links: {
    banner: {
      color: 'background',
      transition: 'all 0.2s ease-in-out',
      ':focus, :hover': {
        color: 'background',
        borderBottomColor: 'background',
      },
    },
    heading: {
      color: 'text',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 3,
    },
    h1: {
      color: 'background',
      my: 1,
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'primary',
      fontSize: 4,
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontFamily: 'heading',
      py: 2,
      my: 2,
      borderBottom: (theme: Theme): string => `1px solid ${theme.colors?.text}`,
    },
    h3: {
      color: 'text',
      mt: 0,
      mb: 1,
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'muted',
      mt: 2,
      mb: 1,
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      my: 1,
    },
    a: {
      fontSize: 'inherit',
      color: 'secondary',
      textDecoration: 'none',
      mb: 1,
      outline: 'none',
      borderBottom: '2px solid transparent',
      transition:
        'color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out',
      ':hover, :focus': {
        color: 'primary',
        borderBottomColor: 'primary',
      },
    },
    img: {
      maxWidth: '100%',
    },
  },
}

export default theme
