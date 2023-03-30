import { ReactElement, useState, useEffect, useCallback, useRef } from "react";
import ContentLayout from "@root/src/Layout/ContentLayout";
import styeld from "styled-components";

import { values } from "./configs";

export default function Dashboard(): ReactElement {
  const [scroll, setScroll] = useState<number>(0);

  const handle = useCallback(() => {
    const scrollY = window.scrollY;
    setScroll(scrollY);
    const direction = scrollY > scroll ? "Scroll Down" : "Scroll Up";
    console.log(direction);
    return direction;
  }, [scroll]);

  useEffect(() => {
    window.addEventListener("scroll", handle);
    return () => {
      window.removeEventListener("scroll", handle);
    };
  });

  function useMoveScrool() {
    const refObject = {
      bridge: useRef(null),
      tower: useRef(null),
      home: useRef(null),
    };
    const onMoveToElement = () => {
      Object.keys(refObject)
        .filter((d) => d === refObject[d])
        .current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return { refObject, onMoveToElement };
  }

  const refObject = {
    bridge: useRef(null),
    tower: useRef(null),
    home: useRef(null),
  };

  return (
    <ContentLayout>
      {values.pages.map((pages) => {
        return (
          <StyledItems2
            key={pages.key}
            back={pages.name}
            position={pages.position}
            ref={refObject[pages.name]}
          >
            <StyledTitle>{pages.title}</StyledTitle>
          </StyledItems2>
        );
      })}
      <button onClick={}>테스트</button>
    </ContentLayout>
  );
}

const StyledTitle = styeld.span(({ theme }) => {
  return {
    position: "absolute",
    fontSize: "40px",
    color: theme.white,
  };
});

const StyledItems2 = styeld.section<{ back: string; position: string }>(
  ({ back, position }) => {
    return {
      width: "auto",
      height: "calc(100vh - 50px)",
      background: `url(${back})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: `${position}`,

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
  }
);

// const [y, setY] = useState<any>(document?.scrollingElement?.scrollHeight);
// const [scrollDirection, setScrollDirection] = useState(
//   "you have not scrolled yet"
// );

// const handleNavigation = useCallback(
//   (e) => {
//     if (y > window.scrollY) {
//       setScrollDirection("Scrolling Up");
//     } else if (y < window.scrollY) {
//       setScrollDirection("Scrolling Down");
//     }
//     setY(window.scrollY);
//   },
//   [y]
// );

// useEffect(() => {
//   window.addEventListener("scroll", handleNavigation);

//   return () => {
//     window.removeEventListener("scroll", handleNavigation);
//   };
// }, [handleNavigation]);

// const handelScroll = useCallback(() => {
//   console.log("작동함?");
//   const scrollY = window.scrollY;
//   console.log("ScrollY:", scrollY);
//   const direction = scrollY > scroll ? "Scroll Down" : "Scroll Up";
//   return direction;
// }, [scroll]);
// handelScroll();

// useEffect(() => {
//   window.addEventListener("scroll", () => console.log("useEffect"));

//   return () => {
//     window.removeEventListener("scroll", () => console.log("useEffect"));
//   };
// });
