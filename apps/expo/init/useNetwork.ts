import * as Network from "expo-network";
import type { NetworkStateType } from "expo-network";

interface NetworkState {
  isConnected: boolean;
  type: NetworkStateType;
  isInternetReachable: boolean | null;
}

export async function checkNetworkState(): Promise<NetworkState> {
  try {
    const state = await Network.getNetworkStateAsync();
    return {
      isConnected: state.isConnected ?? false,
      type: state.type ?? Network.NetworkStateType.NONE,
      isInternetReachable: state.isInternetReachable ?? false,
    };
  } catch (error) {
    console.error("Network state check failed:", error);
    return {
      isConnected: false,
      type: Network.NetworkStateType.NONE,
      isInternetReachable: false,
    };
  }
}
