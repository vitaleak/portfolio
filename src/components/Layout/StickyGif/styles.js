import styled from 'styled-components'
import Image from 'next/image'
import { devices } from '@/lib/devices'

export const MarqueeWrapper = styled.div`
  position: fixed;
  z-index: 999;
  bottom: 1.25rem;
  width: 100vw;
  cursor: pointer;

  @media ${devices.lg} {
    bottom: 1.4rem;
  }
`
export const StickyImage = styled(Image)`
  width: 10rem;
  height: 10rem;
  ${props => (props.$inverted ? 'filter: invert(100%);' : '')}
`
export const StickyImageWrapper = styled.div`
  display: grid;
  width: 100vw;
  justify-content: flex-end;
  position: relative;
  left: 3.45rem;
`
