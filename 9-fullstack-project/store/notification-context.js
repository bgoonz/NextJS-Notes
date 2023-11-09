import { createContext, useState } from "react";

const NotificationContext = createContext({
  notification: null, //{title,message,status}
  showNotification: function () {},
  hideNotification: function () {}
});

export function NotificationContextProvider({ children }) {
    
    
  return <NotificationContext.Provider>{children}</NotificationContext.Provider>;
}

export default NotificationContext;
