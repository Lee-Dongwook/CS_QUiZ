import React, { useEffect } from "react";
import appsFlyer from "react-native-appsflyer";

const InitializeSDKHandler = (props) => {
  const { displayConversionData, useDeepLink } = props;

  useEffect(() => {
    appsFlyer.initSdk(
      {
        devKey: "",
        isDebug: true,
        appId: "",
        onInstallConversionDataListener: displayConversionData,
        onDeepLinkListener: useDeepLink,
        timeToWaitForATTUserAuthorization: 10,
      },
      (result) => {
        console.log(result);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  return null;
};

export default InitializeSDKHandler;
