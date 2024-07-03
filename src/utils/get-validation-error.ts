import { TypeWithKey } from "../models";

export const getValidationError = (errorCode: any) => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_NETWORK: "ERROR GETTING THE INFORMATION, PLACE TRY LATER!!",
  };

  return codeMatcher[errorCode];
};
