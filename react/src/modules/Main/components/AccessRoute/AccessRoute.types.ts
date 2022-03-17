import { RouteProps } from "react-router-dom";
import { ERole } from "../../../../utils";

export interface Props extends RouteProps {
    requiredRole?: ERole;
}

export type TAccessRouteHook = (props: RouteProps) => void;