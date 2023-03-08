
import { TypeWithKey } from "../models";
export const getValidationError = (errorCode: any) => {
    const codeMatcher: TypeWithKey<string> = {
        ERR_NETWORK: "Se rompio todo",
}

return codeMatcher[errorCode];
}
