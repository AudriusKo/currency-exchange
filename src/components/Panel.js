import React from 'react'
import styled from 'styled-components'

const StyledPanel = styled.div`
  display: flex;
  flex-flow: row wrap;
  position: relative;
  padding: 40px 20px;
  background: ${props => props.muted ? "#f3f3f5" : "#ffffff"};
`

const Panel = ({muted, children}) => (
  <StyledPanel muted={muted}>
    {children}
  </StyledPanel>
)

export default Panel