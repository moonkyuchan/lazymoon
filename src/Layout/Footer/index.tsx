import { ReactElement } from "react";
import styled from "styled-components";

import Icon, {
  InstagramOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";

function WebFooter(): ReactElement {
  const icon = [
    {
      link: "https://www.instagram.com/kyu90/",
      icon: InstagramOutlined,
    },
    {
      link: "https://github.com/moonkyuchan",
      icon: GithubOutlined,
    },
    {
      link: "mailto:lazychan90@gmail.com",
      icon: MailOutlined,
    },
  ];
  const handleLink = (link: string) => window.open(link);

  return (
    // React.ForwardRefExoticComponent<any> 이게 뭐지? 검색 필요
    <StyledFooter>
      {icon.map((data, idx) => {
        return (
          <StyledIcon
            key={idx}
            onClick={() => handleLink(data.link)}
            component={data.icon as React.ForwardRefExoticComponent<any>}
          />
        );
      })}
    </StyledFooter>
  );
}

const StyledFooter = styled.footer(() => {
  return {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: "50px",
  };
});

const StyledIcon = styled(Icon)(() => {
  return {
    fontSize: "25px",
    margin: "0 6px",
  };
});

export default WebFooter;
