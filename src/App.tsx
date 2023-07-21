import { Header, ContentLayout } from "@/Layout";
import { Slider } from "@/Components/Common";
import { values } from "@/Configs";

export default function App() {
  return (
    <ContentLayout>
      <Header />
      <Slider values={values} title={"Best"} />
    </ContentLayout>
  );
}
