import { IPanel } from "App";
import styled from "styled-components";

function Panel(props: IPanel) {
  return (
    <CPanel {...props}>
      <h6 className="title">{props.title}</h6>
      <p className="subtitle">{props.subtitle}</p>
    </CPanel>
  );
}

export default Panel;

interface SProps {
  url: string;
  width: number;
  height: number;
}

const CPanel = styled.div.attrs<SProps>((props: SProps) => ({
  style: {
    width: props.width + "px",
    height: props.height + "px",
    backgroundImage: `url(${props.url})`,
  },
}))<SProps>`
  display: flex;
  background-size: cover;
  flex-direction: column;
  flex-shrink: 0;
  padding: 36px;
  justify-content: space-between;
  gap: 16px;
  .title {
    color: white;
    font-size: 48px;
  }

  .subtitle {
    color: white;
    font-size: 32px;
    word-wrap: break-word;
    overflow: hidden;
    white-space: normal;
  }
`;
