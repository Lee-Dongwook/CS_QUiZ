export interface AppVersion {
  major?: number;
  minor?: number;
  patch?: number;
}

export interface VersionCheckResponse {
  ok: boolean;
  data: AppVersion;
}
