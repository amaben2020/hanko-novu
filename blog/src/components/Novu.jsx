import {
  NotificationBell,
  NovuProvider,
  PopoverNotificationCenter,
} from "@novu/notification-center";

import { useNavigate } from "react-router-dom";

function Novu() {
  const navigate = useNavigate();
  const onNotificationClick = (notification) =>
    navigate(notification.cta.data.url);

  return (
    <>
      <NovuProvider
        subscriberId="65a8cf1cf58e905ecabfa7e4"
        applicationIdentifier="yBu8DXDWvlNG"
      >
        <PopoverNotificationCenter
          onNotificationClick={onNotificationClick}
          colorScheme="light"
        >
          {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
        </PopoverNotificationCenter>
      </NovuProvider>
    </>
  );
}

export default Novu;
