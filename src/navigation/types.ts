import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type AuthNavigatorParamsList = {
  CompanyRegistr: undefined;
  Person: undefined;
  SignIn: undefined;
};
export type TabNavigatorParamsList = {
  Main: undefined;
  AddAdvert: undefined;
  Profile: undefined;
  InWork: undefined;
  Chat: undefined;
};

export type RootNavigatorParamsList = {
  Auth: AuthNavigatorParamsList;
  TabBar: TabNavigatorParamsList;
};

export type MainScreenNavigatorParamsList = {
  Home: undefined;
  Cargo: NavigatorScreenParams<CargoStackNavigatorParamsList>;
  Transports: NavigatorScreenParams<TransportsStackNavigatorParamsList>;
  Auction: NavigatorScreenParams<AuctionStackNavigatorParamsList>;
  Storage: NavigatorScreenParams<StorageStackNavigatorParamsList>;
  SpecEqupment: NavigatorScreenParams<SpecEqupmentStackNavigatorParamsList>;
};

export type CargoStackNavigatorParamsList = {
  Form: undefined;
  Results: undefined;
};
export type TransportsStackNavigatorParamsList = {
  Form: undefined;
  Results: undefined;
};
export type AuctionStackNavigatorParamsList = {
  Form: undefined;
  Results: undefined;
};
export type StorageStackNavigatorParamsList = {
  Form: undefined;
  Results: undefined;
};
export type SpecEqupmentStackNavigatorParamsList = {
  Form: undefined;
  Results: undefined;
};

export type MainScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabNavigatorParamsList, 'Main'>,
  NativeStackNavigationProp<MainScreenNavigatorParamsList>
>;
