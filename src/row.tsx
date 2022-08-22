import React from "react";
import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

interface CProps {
  speed: number; // sec per 1920px
  gap?: number;
  width?: number; // width of container
  height?: number;
  className?: string;
  reverse?: boolean;
  children: JSX.Element | JSX.Element[];
}

function Row({
  speed: time,
  gap = 0,
  height,
  width,
  className = "",
  reverse,
  children,
}: CProps) {
  const _children: JSX.Element[] = !Array.isArray(children)
    ? [children]
    : children;

  const [duration, setDuration] = useState<number>(0);
  const [from, setFrom] = useState<number>(0);
  const [to, setTo] = useState<number>(0);
  const [additionalItems, setAdditionalItems] =
    useState<JSX.Element[]>(_children);
  const refs = useRef<HTMLDivElement[]>(Array(_children.length));
  const screenWidth = width ?? window.innerWidth;
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    let _from = 0;
    let _to = 0;
    const additionalElements = [];
    const _width = refs.current.reduce((w, el) => w + el.clientWidth + gap, 0);
    if (_width < screenWidth) {
      setIsValid(false);
      return;
    }
    if (reverse) {
      let addW = 0;
      for (
        let i = refs.current.length - 1, w = 0;
        w < screenWidth;
        w += refs.current[i].clientWidth + gap, --i
      ) {
        additionalElements.push(_children[i]);
        addW += refs.current[i].clientWidth + gap;
      }
      additionalElements.reverse();

      _from = -_width - addW + screenWidth;
      _to = -addW + screenWidth;
    } else {
      for (
        let i = 0, w = 0;
        w < screenWidth;
        w += refs.current[i].clientWidth + gap, i++
      ) {
        additionalElements.push(_children[i]);
      }
      _from = 0;
      _to = -_width;
    }

    const _duration = Math.ceil((Math.abs(_from - _to) * time) / 1920);
    setDuration(_duration);
    setFrom(_from);
    setTo(_to);
    setAdditionalItems(additionalElements);
  }, []);

  return (
    <>
      {isValid ? (
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
            {reverse ? additionalItems : null}

            {_children.map((ch, i) => (
              <div key={i} ref={(el) => (refs.current[i] = el!)}>
                {ch}
              </div>
            ))}

            {reverse ? null : additionalItems}
          </div>
        </Container>
      ) : (
        "Not enough elements"
      )}
    </>
  );
}

export default Row;

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

    & > * {
      flex-shrink: 0;
    }
  }
`;
