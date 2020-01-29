/** @jsx jsx */
import { jsx, Styled, useColorMode } from 'theme-ui'
import { Link } from 'gatsby'
import { Global } from '@emotion/core'
// import Avatar from './avatar'
import MailchimpForm from './components/MailchimpForm'
import {
  FaTwitter as Twitter,
  FaGithub as GitHub
} from 'react-icons/fa'

const modes = [
  'light',
  'black',
  'dark',
  'deep',
  'hack',
  'pink',
]

const ColorButton = ({
  mode,
  ...props
}) =>
  <button
    {...props}
    title='Cycle Color Mode'
    sx={{
      display: 'inline-block',
      appearance: 'none',
      bg: 'transparent',
      color: 'inherit',
      p: 1,
      m: 0,
      border: 0,
      borderRadius: 9999,
      ':hover,:focus': {
        color: 'primary',
        boxShadow: '0 0 0 3px',
        outline: 'none',
      }
    }}>
    <svg
      viewBox='0 0 32 32'
      width='24'
      height='24'
      fill='currentcolor'
      sx={{
        display: 'block',
      }}>
      <circle
        cx='16'
        cy='16'
        r='14'
        fill='none'
        stroke='currentcolor'
        strokeWidth='4'
      />
      <path
        d={`
          M 16 0
          A 16 16 0 0 0 16 32
          z
        `}
      />
    </svg>
  </button>

export default props => {
  const [mode, setMode] = useColorMode()
  const cycleMode = e => {
    const i = modes.indexOf(mode)
    const n = (i + 1) % modes.length
    setMode(modes[n])
  }

  return (
    <div
      sx={{
        variant: 'styles.root',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Global
        styles={{
          '*': {
            boxSizing: 'border-box',
          },
          body: {
            margin: 0,
          }
        }}
      />
      <header
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          maxWidth: 'wide',
          mx: 'auto',
          px: 3,
          py: 4,
        }}>
        <Styled.a
          as={Link}
          to='/'
          sx={{
            variant: 'styles.navitem',
            mr: 3,
          }}>
          {/* <Avatar size={32} sx={{ mr: 2 }} /> */}
          Josh Buchea
        </Styled.a>
        <Styled.a
          as={Link}
          to='/notes'
          sx={{
            variant: 'styles.navitem',
            mr: 3,
          }}>
          Notes
        </Styled.a>
        <div sx={{ mx: 'auto' }} />
        <ColorButton
          mode={mode}
          onClick={cycleMode}
        />
      </header>

      <main
        sx={{
          width: '100%',
          maxWidth: 'wide',
          px: 3,
          mx: 'auto',
          flex: '1 1 auto',
        }}>
        {props.children}
      </main>

      <div
        sx={{
          px: 3,
          py: 5,
          width: '100%',
          maxWidth: 'wide',
          mx: 'auto',
        }}
        // style={{ textAlign: 'center' }}
      >
        <h3 sx={{ variant: 'styles.h3' }}>
          Get email updates and announcements
        </h3>
        {/* <p>A few reasons to sign-up for my mailing list...</p> */}
        <MailchimpForm
          action="https://joshbuchea.us20.list-manage.com/subscribe/post?u=d2cd3071564fbf7001bed1736&amp;id=d5283d8443"
        />
      </div>

      <footer
        sx={{
          px: 3,
          py: 5,
          width: '100%',
          maxWidth: 'wide',
          mx: 'auto',
        }}>
        <div
          sx={{
            py: 4,
            display: 'flex',
            justifyContent: 'center',
          }}>
          {/* <Link to='/avatar'>
            <Avatar />
          </Link> */}
          <a
            href='https://twitter.com/joshbuchea'
            title='Twitter'
            sx={{
              variant: 'styles.navitem',
              mx: 3,
            }}>
            <Twitter size={24} />
          </a>
          <a
            href='https://github.com/joshbuchea'
            title='GitHub'
            sx={{
              variant: 'styles.navitem',
            }}>
            <GitHub size={24} />
          </a>
        </div>
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            fontSize: 0,
            my: 2,
          }}>
          <div>As an Amazon Associate I earn from qualifying purchases</div>
          <div sx={{ mx: 'auto' }} />
          <div>© 2019 Josh Buchea</div>
        </div>
      </footer>
    </div>
  )
}
