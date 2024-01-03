import styled from 'styled-components'
import { WindowBody } from '../PageWindow/styles'
import { borderStyle } from '@/design/global'
import { colors } from '@/design/colors'
import { devices } from '@/design/devices'

export const TableContainer = styled.div`
  overflow: auto;
  min-height: 20rem;
  max-height: 20rem;
  padding: 0 0.5rem;
  @media ${devices.md} {
    max-height: 30rem;
  }
`

export const TableWindowBody = styled(WindowBody)`
  padding: 0;
`

export const TableWindowWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  ${borderStyle}
  outline: 0;
  position: relative;
  align-items: flex-start;
  background-color: ${colors.grey};
`
