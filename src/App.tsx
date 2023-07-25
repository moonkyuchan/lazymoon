import { Header, ContentLayout, Grid } from "@/Layout";
import { Slider, Card } from "@/Components/Common";
import { values } from "@/Configs";
import moment from "moment";
import tower from "@/Asset/Images/french.jpeg";
import bridge from "@/Asset/Images/bridge.jpeg";
import home from "@/Asset/Images/home.jpeg";

export default function App() {
  const MokCard = [
    {
      key: 1,
      img: bridge,
      title: "[신사동맛집] 아 배고파배고파보ㄴ",
      comment: 25,
      date: moment().format("YYYY-MM-DD"),
    },
    {
      key: 2,
      img: tower,
      title:
        "[PLACE] 논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 ",
      comment: 12,
      date: moment().format("YYYY-MM-DD"),
    },
    {
      key: 3,
      img: home,
      title: "ET CETERA",
      comment: 123,
      date: moment().format("YYYY-MM-DD"),
    },
    {
      key: 4,
      img: tower,
      title: "PLACE",
      comment: 54,
      date: moment().format("YYYY-MM-DD"),
    },
    {
      key: 5,
      img: home,
      title: "ET CETERA",
      comment: 1203,
      date: moment().format("YYYY-MM-DD"),
    },
    {
      key: 6,
      img: tower,
      title:
        "[PLACE] 논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 ",
      comment: 12,
      date: moment().format("YYYY-MM-DD"),
    },
    {
      key: 7,
      img: tower,
      title:
        "[PLACE] 논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 ",
      comment: 12,
      date: moment().format("YYYY-MM-DD"),
    },
    {
      key: 8,
      img: tower,
      title:
        "[PLACE] 논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 ",
      comment: 12,
      date: moment().format("YYYY-MM-DD"),
    },
    {
      key: 9,
      img: tower,
      title:
        "[PLACE] 논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 ",
      comment: 12,
      date: moment().format("YYYY-MM-DD"),
    },
    {
      key: 10,
      img: tower,
      title:
        "[PLACE] 논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 맛집논현동 ",
      comment: 12,
      date: moment().format("YYYY-MM-DD"),
    },
  ];
  return (
    //회원유형별 보여주기 한번 필터링 필요
    <ContentLayout>
      <Header />
      <Slider values={values} title={"Best"} />
      <Grid>
        {MokCard.map((data) => {
          return <Card data={data} key={data.key} />;
        })}
      </Grid>
    </ContentLayout>
  );
}
