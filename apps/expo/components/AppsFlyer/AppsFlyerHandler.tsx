import React from "react";
import { View } from "react-native";
import InitializeSDKHandler from "./InitializeSDKHandler";

const AppsFlyerHandler = (props) => {
  const displayConversionData = true;
  const useDeepLink = true;

  return (
    <View>
      <InitializeSDKHandler
        displayConversionData={displayConversionData}
        useDeepLink={useDeepLink}
      />
    </View>
  );
};

export default AppsFlyerHandler;
