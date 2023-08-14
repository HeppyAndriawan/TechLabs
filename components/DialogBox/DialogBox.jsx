"use client";
import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import { desktop, tablet, mobile } from "./styles/styles";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDialog } from "./store/store";

export default function DialogBox(props) {
  const { styles } = MediaQuery(desktop, tablet, mobile, tablet);

  // Dialog Store
  const dialog = useDialog((state) => state.isDialogOpen);
  const resetDialog = useDialog((state) => state.resetDialog);

  return (
    styles !== null && (
      <Dialog open={props.open} onOpenChange={() => props.openChange()}>
        <DialogContent className={styles.container}>
          <div className={styles.wrapContainer}>
            <DialogHeader>
              <DialogTitle>{props.title}</DialogTitle>
              <DialogDescription>{props.subTitle}</DialogDescription>
            </DialogHeader>
            <div className={styles.children.container}>{props.children}</div>
          </div>
        </DialogContent>
      </Dialog>
    )
  );
}

/**
 * HOW TO USE
 * 1. Paste Dialog Store
  const updateDialog = useDialog((state) => state.updateDialog);
 *  
 * 2. Implement this component
 * Set useState, exp: const [createNewPost, setcreateNewPost] = useState(false);
 *  <DialogBox
    title=""
    subTitle=""
    trigger={() => createNewPost(false)}
    >
    {Component}
    </DialogBox>;
 */
