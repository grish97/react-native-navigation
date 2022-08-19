import { NConst } from "constants";

import type {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";

/** Root Stack */
export interface IRootStackParamList {
  [NConst.HOME_STACK]: NavigatorScreenParams<THomeStackParamList>;
  [NConst.RIDE_STACK]: NavigatorScreenParams<TRiderStackParamList>;
  [NConst.AUTH_STACK]: NavigatorScreenParams<TAuthStackParamList>;
}

export interface IRootStackScreenProps<T extends keyof IRootStackParamList>
  extends StackScreenProps<IRootStackParamList, T> {}

/** Home Stack types */
export type THomeStackParamList = {
  [NConst.HOME]: undefined;
  [NConst.HOME]: undefined;
  [NConst.CALENDAR]: undefined;
  [NConst.RN_CAMERA]: undefined;
  [NConst.NOTIFICATIONS]: undefined;
  [NConst.SIGNATURE]: undefined;
};

export type THomeStackScreenProps<T extends keyof THomeStackParamList> =
  CompositeNavigationProp<
    StackScreenProps<THomeStackParamList, T>,
    IRootStackScreenProps<keyof IRootStackParamList>
  >;

/** Rider Stack types */
export type TRiderStackParamList = {
  [NConst.RIDE_LIST]: undefined;
  [NConst.RIDE_DETAILS]: {
    riderId: number;
  };
};

/** Authentication Stack types */
export type TAuthStackParamList = {
  [NConst.SIGN_IN]: undefined;
  [NConst.SIGN_UP]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends IRootStackParamList {}
  }
}
