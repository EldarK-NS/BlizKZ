import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ListItemWithIcon from 'molecules/ListItemWithIcon';
import {filterItemsList} from 'data/mainlist.js';
import {MainScreenNavigationProp} from 'nav/types';

export interface IMainComponentProps {
  navigation: MainScreenNavigationProp;
}

const MainComponent = ({navigation}: IMainComponentProps): JSX.Element => {
  return (
    <View>
      <View>
        <FlatList
          data={filterItemsList}
          renderItem={({item}) => {
            return (
              <ListItemWithIcon
                Style={{paddingHorizontal: 16}}
                icon={item.icon}
                title={item.title}
                subtitle={item.descr}
                onpress={() =>
                  navigation.navigate(`${item.mainPath}`, {
                    screen: `${item.screen}`,
                  })
                }
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default MainComponent;

const styles = StyleSheet.create({});
