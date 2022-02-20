export type AuthNavigatorParamsList = {
  Registration: undefined;
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
