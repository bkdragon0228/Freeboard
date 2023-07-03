import { IQuery } from "../../../commons/types/generated/types";

export interface MYUIProps {
    userData :  Pick<IQuery, "fetchUserLoggedIn">;
}