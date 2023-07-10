"use client";
import React from "react";
import MediaQuery from "@/tool/MediaQuery/MediaQuery";
import {
  Cross1Icon,
  ExclamationTriangleIcon,
  BellIcon,
} from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useAppContext } from "@/tool/StateProvider/StateProvider";
import desktop from "./styles/DesktopWarningMessage.module.css";
import tablet from "./styles/TabletWarningMessage.module.css";
import mobile from "./styles/MobileWarningMessage.module.css";

export default function WarningMessage() {
  const context = useAppContext();
  const { styles } = MediaQuery(desktop, tablet, mobile, tablet);

  // Remove Message
  const removeWarning = (id) => {
    const filterMessages = context.warningMessage.filter(
      (info) => info.id !== id
    );
    context.setWarningMessage(filterMessages);
  };

  return (
    styles !== null &&(
      <div className={styles.container}>
        <div className={styles.warningContainer}>
          {context.warningMessage.map((info) => (
            <Alert
              key={info.id}
              className={styles.warningAlert}
              variant={info.type !== "default" ? "destructive" : "default"}
            >
              {info.type !== "default" ? (
                <ExclamationTriangleIcon className="h-4 w-4" />
              ) : (
                <BellIcon className="h-4 w-4" />
              )}
              <AlertTitle>{info.title}</AlertTitle>
              <AlertDescription>{info.message}</AlertDescription>
              <span
                className={styles.warningCloseBTN}
                onClick={() => removeWarning(info.id)}
              >
                <Cross1Icon />
              </span>
            </Alert>
          ))}
        </div>
      </div>
    )
  );
}
