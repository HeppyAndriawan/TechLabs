"use client"
import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import { desktop, tablet, mobile } from "./styles/styles";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function DialogBox(props) {
  const { styles } = MediaQuery(desktop, tablet, mobile, tablet);
  return styles !== null && (
    <Dialog open={props.isOpen} onOpenChange={() => props.trigger()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{props.title}</DialogTitle>
          <DialogDescription>{props.subTitle}</DialogDescription>
        </DialogHeader>
        <div className={styles.children.container}>

        {props.children}
        </div>
      </DialogContent>
    </Dialog>
  );
}

/**
 * HOW TO USE
 * Set useState, exp: const [createNewPost, setcreateNewPost] = useState(false);
 * <DialogBox isOpen={createNewPost} trigger={()=>setcreateNewPost(false)}/>
 */

/**
 * CREATE POST API
 * CREATE POST COMPONENT
 */
