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
  reverse?: boolean;
}

function Gallery({
  time,
  panelWidth,
  panelHeight,
  items,
  gap = 0,
  width,
  height,
  className = "",
  reverse,
}: CProps) {
  // time === time for element to cross the screen
  // _width === width of element and a gap if presented
  const _width = panelWidth + gap;
  const screenWidth = width ?? window.innerWidth;

  const additionalElements = Math.ceil(screenWidth / _width);
  console.log(additionalElements);
  let from: number = 0;
  let to: number = 0;
  let _items: IPanel[] = [];

  if (reverse) {
    from = -(items.length + additionalElements) * _width + screenWidth;
    to = -additionalElements * _width + screenWidth;
    _items = [
      ...items.slice(items.length - additionalElements, items.length),
      ...items,
    ];
  } else {
    from = 0;
    to = -items.length * _width;
    _items = [...items, ...items.slice(0, additionalElements)];
  }

  const duration = Math.ceil((Math.abs(from - to) * time) / 1920);

  return (
    <Container
      className={className}
      from={from}
      to={to}
      duration={duration}
      gap={gap}
      width={width}
      height={height}
      reverse={reverse}
    >
      <div className="content">
        {_items.map((item, i) => (
          <Panel key={i} width={panelWidth} height={panelHeight} {...item} />
        ))}
      </div>
    </Container>
  );
}

export default Gallery;

const slide = (from: number, to: number) => keyframes`
  0% {
    left: ${from}px;
  }
  100% {
    left: ${to}px
  }
`;

const slideReverse = (from: number, to: number) => keyframes`
  0% {
    left: ${from}px;
  }
  100% {
    left: ${to}px
  }
`;

interface SProps {
  from: number;
  to: number;
  duration: number;
  gap: number;
  width?: number;
  height?: number;
  reverse?: boolean;
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
    animation: ${({ from, to, reverse = false }: SProps) =>
        reverse ? slideReverse(from, to) : slide(from, to)}
      ${(props) => props.duration}s linear infinite;
  }
`;
