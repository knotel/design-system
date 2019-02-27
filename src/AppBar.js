import React from 'react'
import styled from 'styled-components'
import { space, fontSize } from 'styled-system'
import Flex from './Flex'
import Box from './Box'
import Icon from './Icon'
import theme from './theme'
import PropTypes from 'prop-types'

const AppBar = styled(Flex)`
  border-bottom: 1px solid ${props => props.theme.colors.gray200};
  height: 50px;
  padding: 0px ${props => theme.space[3]}px;
  ${props => props.theme.mediaQueries['md']} {
    height: 60px;
    padding: 0px ${props => theme.space[4]}px;
  }
  a {
    color: ${props =>
      props.inverse ? props.theme.colors.white : props.theme.colors.text};
  }
`

const DesktopLinksWrapper = styled(Flex)`
  ${props => props.theme.mediaQueries['md']} {
    display: block;
  }
  display: none;
`

const Hamburger = styled(Icon)`
  ${props => props.theme.mediaQueries['md']} {
    display: none;
  }
  position: relative;
  top: -2px;
  &:hover {
    cursor: pointer;
  }
`

const Skrim = styled.div`
  ${props => props.theme.mediaQueries['md']} {
    display: none;
  }
  background: rgba(0, 0, 0, 0.4);
  display: ${props => (props.menuOpen ? 'block' : 'none')};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`

const MobileMenu = styled(Flex)`
  ${props => props.theme.mediaQueries['md']} {
    display: none;
  }
  background: #fff;
  bottom: 0;
  position: fixed;
  right: -260px;
  top: 0;
  transform: ${props =>
    props.menuOpen ? 'translate3d(-260px, 0, 0)' : 'translate3d(0)'};
  transition: ${props => props.menuOpen && '0.2s ease-in-out'};
  min-width: 260px;
  z-index: 300;
`

const Close = styled(Icon)`
  position: absolute;
  top: 17px;
  left: 16px;
  &:hover {
    cursor: pointer;
  }
`

const UserPicture = styled.img`
  ${props => props.theme.mediaQueries['md']} {
    display: inline;
  }
  border: ${props => `1px solid ${props.theme.colors.gray200}`};
  display: none;
  height: 34px;
  border-radius: 50%;
  position: relative;
  top: -2px;
  ${space}
`

export default class AppBarWrapper extends React.Component {
  state = {
    menuOpen: false
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  render() {
    const LinkComponent = this.props.linkComponent
    const links = this.props.links
    const { beforeLinks, userPicture } = this.props
    const BeforeLinks = beforeLinks
    const logo = (
      <Icon
        name="knotelLogo"
        size={80}
        color={this.props.inverse ? theme.colors.white : theme.colors.text}
      />
    )

    let DesktopLink
    let MobileLink

    if (LinkComponent) {
      DesktopLink = styled(LinkComponent)`
        position: relative;
        top: -3px;
        ${space}
      `
      MobileLink = styled(LinkComponent)`
        display: block;
        padding-bottom: ${props => `${props.theme.space[3]}px`};
        &:hover {
          cursor: pointer;
          text-decoration: none !important;
        }
        ${fontSize}
      `
    }

    return (
      <AppBar
        align="center"
        bg={this.props.inverse ? this.props.color : theme.colors.white}
        color={this.props.inverse ? theme.colors.white : theme.colors.text}
        justify="space-between"
        inverse={this.props.inverse}
      >
        <Box>
          {LinkComponent ? (
            <LinkComponent to={this.props.logoPath}>{logo}</LinkComponent>
          ) : (
            logo
          )}
        </Box>
        <Flex align="center">
          {beforeLinks && <BeforeLinks />}
          {links && (
            <DesktopLinksWrapper>
              {links.map(link => (
                <DesktopLink
                  key={link.label}
                  px={3}
                  to={link.to}
                  onClick={() => this.toggleMenu()}
                >
                  {link.label}
                </DesktopLink>
              ))}
            </DesktopLinksWrapper>
          )}
          {links && (
            <React.Fragment>
              <Hamburger
                onClick={() => this.toggleMenu()}
                name="menu"
                color={theme.colors.gray500}
              />
              <Skrim
                onClick={() => this.toggleMenu()}
                menuOpen={this.state.menuOpen}
              />
              <MobileMenu
                align="flex-end"
                flexDirection="column"
                pt={5}
                px={5}
                menuOpen={this.state.menuOpen}
              >
                <Close
                  onClick={() => this.toggleMenu()}
                  name="close"
                  color={theme.colors.gray500}
                />
                {links &&
                  links.map(link => (
                    <MobileLink
                      fontSize={3}
                      key={link.label}
                      to={link.to}
                      onClick={() => this.toggleMenu()}
                    >
                      {link.label}
                    </MobileLink>
                  ))}
              </MobileMenu>
            </React.Fragment>
          )}
          {userPicture && <UserPicture ml={2} src={userPicture} />}
        </Flex>
      </AppBar>
    )
  }
}

AppBarWrapper.displayName = 'AppBar'

AppBarWrapper.defaultProps = {
  inverse: false,
  color: theme.colors.gray800,
  theme: theme
}

AppBarWrapper.propTypes = {
  inverse: PropTypes.bool,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      label: PropTypes.string
    })
  ),
  userPicture: PropTypes.string
}
