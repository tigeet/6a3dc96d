import { IPanel } from "App";
import Panel from "panel";
import styled, { keyframes } from "styled-components";

interface CProps {
  time: number;
  panelWidth: number;
  panelHeight: number;
  gap?: number;
  items: IPanel[];
  width?: number;
  height?: number;
  className?: string;
}

function Gallery({
  time,
  panelWidth,
  panelHeight,
  items,
  gap,
  width,
  height,
  className,
}: CProps) {
  // time === time for element to cross the screen
  // panelWidth === width of element and a gap if presented
  const _width = panelWidth + (gap ?? 0);
  const screenWidth = width ?? window.innerWidth;
  const offset = -_width * items.length;
  const duration = Math.ceil((-offset * time) / screenWidth);

  const additionalElements = Math.ceil(screenWidth / _width);
  const _items = [...items, ...items.slice(0, additionalElements)];

  return (
    <Container
      className={className ?? ""}
      offset={offset}
      duration={duration}
      gap={gap ?? 0}
      width={width}
      height={height}
    >
      <div className="content">
        {_items.map((item) => (
          <Panel width={panelWidth} height={panelHeight} {...item} />
        ))}
      </div>
    </Container>
  );
}

export default Gallery;

const slide = (offset: number) => keyframes`
  0% {
    left: 0%;
  }
  100% {
    left: ${offset}px
  }
`;

interface SProps {
  offset: number;
  duration: number;
  gap: number;
  width?: number;
  height?: number;
}
const Container = styled.div.attrs(({ width, height }: SProps) => ({
  style: {
    width: width ? width + "px" : "100%",
    height: height ? height + "px" : "100%",
  },
}))<SProps>`
  overflow: hidden;

  .content {
    display: flex;
    left: 0;
    position: relative;
    gap: ${(props) => props.gap}px;
    animation: ${(props) => slide(props.offset)} ${(props) => props.duration}s
      linear infinite;
  }
`;
