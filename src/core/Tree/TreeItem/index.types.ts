import { ViewProps } from "react-native/types";
import { AliasComponent } from "../../../types";

export interface TreeItemProps extends ViewProps, AliasComponent {
  eventKey?: string;
};
