import { ReactElement, useState, useMemo } from "react";
import styeld from "styled-components";

import { CardType } from "@root/src/Configs/types";
import { Card } from "@root/src/Components/Common";

interface OwnProps {
  data: CardType[];
  filter: any;
}

function GridFilter(props): ReactElement<OwnProps> {
  const { data, filter } = props;
  const [currentTab, setCurrentTab] = useState(props.filter[0].tag);

  const sortedData = useMemo(() => {
    return data.sort((a, b) => (a.uploadDate > b.uploadDate ? -1 : 1));
  }, [data]);

  const filteredData = useMemo(() => {
    if (currentTab === "all") {
      return sortedData;
    }
    return sortedData.filter((data) => data.tag.includes(currentTab));
  }, [currentTab, data]);

  const handleTab = (e) => {
    const {
      target: { value },
    } = e;
    setCurrentTab(value);
  };

  return (
    <>
      <StyledFilterWrap>
        {filter.map((category) => {
          return (
            <StyledFilterElement
              key={category.key}
              title={currentTab}
              value={category.tag}
              onClick={handleTab}
            >
              {category.title}
            </StyledFilterElement>
          );
        })}
      </StyledFilterWrap>
      <StyledGrid>
        {filteredData.map((data) => {
          return <Card data={data} key={data.id} />;
        })}
      </StyledGrid>
    </>
  );
}

const StyledGrid = styeld.section(({}) => {
  return {
    display: "grid",
    alignItems: "start",
    gridTemplateColumns: `repeat(${3}, 1fr)`,
    placeItems: "start center",
    gap: "25px 0px",
  };
});

const StyledFilterWrap = styeld.div(() => {
  return {
    margin: "50px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
});

const StyledFilterElement = styeld.button<{ value: string; title: string }>(
  ({ theme, value, title }) => {
    return {
      minWidth: "140px",
      border: "none",
      background: "none",
      fontFamily:
        value === title ? `${theme.fontFamilySb}` : `${theme.fontFamilyEd}`,
      // fontFamily: theme.fontFamilyEd,
      fontSize: value === title ? `${theme.fontSizeXl}` : `${theme.fontSizeLg}`,
      color: value === title ? `${theme.black}` : `${theme.grey2}`,
      cursor: "pointer",
      [":hover"]: {
        color: `${theme.black}`,
      },
    };
  }
);

export default GridFilter;
