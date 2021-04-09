import styled from 'styled-components/native';

interface BlockedViewProps {
  color?: string;
}

const BlockedView = styled.View<BlockedViewProps>`
  position: absolute;
  background-color: ${props => (props.color ? props.color : 'rgba(0,0,0,0.1)')};
  width: 100%;
  height: 100%;
`;

export default BlockedView;
