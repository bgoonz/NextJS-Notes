import { createContext, useState, useEffect } from "react";

const NotificationContext = createContext({
  notification: null, //{title,message,status}
  showNotification: function (notificationData) {},
  hideNotification: function () {}
});

export function NotificationContextProvider({ children }) {
  const [activeNotification, setActiveNotification] = useState();

  useEffect(() => {
    if (activeNotification && (activeNotification.status === "success" || activeNotification.status === "error")) {
      const timer = setTimeout(() => {
        setActiveNotification(null); // or you could call hideNotificationHandler here instead.
        console.log("timer");
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  function showNotificationHandler(notificationData) {
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler
  };

  return <NotificationContext.Provider value={context}>{children}</NotificationContext.Provider>;
}

export default NotificationContext;
