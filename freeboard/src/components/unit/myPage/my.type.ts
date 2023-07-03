import { IQuery } from "../../../commons/types/generated/types";

interface ISections {
    path : string;
    name : string
}

export interface MYUIProps {
    userData :  Pick<IQuery, "fetchUserLoggedIn">;
    pagePath : ISections[];
}