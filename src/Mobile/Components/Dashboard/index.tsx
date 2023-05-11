import { ReactElement, useRef } from "react";
import { useHistory } from "react-router-dom";
import styeld from "styled-components";
import { RightOutlined } from "@ant-design/icons";

import ContentLayout from "@root/src/Layout/ContentLayout";
import { values } from "@/Configs";

export default function Dashboard(): ReactElement {
  // const [sectionNum, setSectionNum] = useState<number>(1);
  const refs = useRef({});
  const histoty = useHistory();

  return (
    <ContentLayout>
      {values.pages.map((pages) => {
        return (
          <StyledItems
            key={pages.key}
            back={pages.name}
            position={pages.position}
            ref={(element) => {
              refs.current[pages.ref] = element;
            }}
          >
            <StyledTitle onClick={() => histoty.push(`/${pages.path}`)}>
              {pages.title} <StyledArrow />
            </StyledTitle>
          </StyledItems>
        );
      })}
    </ContentLayout>
  );
}

const StyledTitle = styeld.span(({ theme }) => {
  return {
    // position: "absolute",
    fontSize: "40px",
    display: "flex",
    alignItems: "center",
    color: theme.white,
  };
});

const StyledArrow = styeld(RightOutlined)(() => {
  return { fontSize: "20px", marginLeft: "10px" };
});

const StyledItems = styeld.section<{ back: string; position: string }>(
  ({ back, position }) => {
    return {
      width: "auto",
      height: "calc(100vh - 0px)",
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

// const onWheel = (event) => {
//   const moveToSection = (key) => {
//     refs.current[key].scrollIntoView({
//       behavior: "smooth",
//       block: "end",
//     });
//   };

//   const direction = event.nativeEvent.wheelDelta > 0 ? "up" : "down";
//   if (direction === "down") {
//     setSectionNum(3);
//     return moveToSection(sectionNum);
//   } else if (direction === "up") {
//     setSectionNum(1);
//     return moveToSection(sectionNum);
//   }
// };

// const handle = useCallback(() => {
//   const scrollY = window.scrollY;
//   setScroll(scrollY);
//   scrollY > scroll ? setSectionNum(3) : setSectionNum(1);
//   return moveToSection(sectionNum);
// }, []);
// useEffect(() => {
//   window.addEventListener("scroll", handle);
//   return () => {
//     window.removeEventListener("scroll", handle);
//   };
// }, []);

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
