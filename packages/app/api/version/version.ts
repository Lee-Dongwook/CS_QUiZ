import Constants from "expo-constants";
import { AppVersion } from "./types";

export function parseVersion(version: string): AppVersion {
  const [major, minor, patch]: number[] = version.split(".").map(Number);
  return { major, minor, patch };
}

export function compareVersions(
  current: AppVersion,
  store: AppVersion
): { needsForceUpdate: boolean; needsSoftUpdate: boolean } {
  if (current.major! < store.major!) {
    return { needsForceUpdate: true, needsSoftUpdate: false };
  }
  if (current.major === store.major && current.minor! < store.minor!) {
    return { needsForceUpdate: false, needsSoftUpdate: true };
  }
  return { needsForceUpdate: false, needsSoftUpdate: false };
}
