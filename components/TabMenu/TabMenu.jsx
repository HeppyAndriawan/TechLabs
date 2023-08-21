import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabMenu(props) {
  const data = props.data;

  const desktop = {
    container: "w-full",
  },
  tablet = {
    constainer: "w-full",
  },
  mobile = {
    constainer: "w-full",
  }

  const { styles } = MediaQuery(desktop, tablet, mobile, tablet);
  return styles !== null && (
    <Tabs defaultValue={props.default.toLowerCase()} className={styles.container}>
      <TabsList className="grid w-fit grid-cols-3">
        {data.map((info) => (
          <TabsTrigger key={info.title} value={info.title.toLowerCase()}>
            {info.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {data.map((info) => (
        <TabsContent key={info.title} value={info.title.toLowerCase()}>
          <Card>
            <CardContent className="space-y-3">{info.component}</CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
}

/** HOW TO USE
 * <TabMenu default="STRING" data={[OBJECT]} />
 */
