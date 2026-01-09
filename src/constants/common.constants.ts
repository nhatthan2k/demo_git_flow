export const LOGIN_KOJI = "https://staging.summitgco.com/login";
export const LOGIN_KOJI_REDIRECT = "https://staging.summitgco.com/login?redirect=https://staging.summitgco.com/tennaiikan";
export const SERVICE_KOJI = "https://staging.summitgco.com/service";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TypeCommon = any;
export const MSG = {
  // Common message
  ERROR_COMMON: "エラー。",
  SUCCESS_COMMON: "成功しました。",
  ERROR_NO_DATA_COMMON: "該当データがありません。",
  LOADING_DATA: "現在、処理中です．．．",
};

export const NOTIFICATION_TYPE = {
  SUCCESS: "success",
  INFO: "info",
  WARNING: "warning",
  ERROR: "error",
};

export const ROUTERS = {
  PRODUCT: '/tennaiikan/product',
  MATERIAL: '/tennaiikan/material',
  AMOUNT: '/tennaiikan/amount',
  TRANSFER: '/tennaiikan/transfer',
};