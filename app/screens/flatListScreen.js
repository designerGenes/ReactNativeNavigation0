import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import {List, ListItem, SearchBar, ActivityIndicator} from 'react-native-elements';
import {Colors, Fonts, Masonry} from '../style';
import Button from 'react-native-button';


class FlatListScreen extends Component {
  static navigationOptions = {
    title: 'FlatList',
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {name: 'John', slogan: 'Eats candy for breakfast', favoriteCity: 'Atlanta'},
        {name: 'Kyle', slogan: 'Stole his own identity', favoriteCity: 'Austin'},
        {name: 'Larry', slogan: 'A creature of the night', favoriteCity: 'Albuquerque'},
        {name: 'Mary', slogan: 'A teacher of the night' , favoriteCity: 'Tulsa'},
        {name: 'Nancy', slogan: 'Steals things to build machines', favoriteCity: 'Dallas'},
        {name: 'Ophelia', slogan: 'Judge; the fairest of them all' , favoriteCity: 'NYC'},
      ]
    }
  }
  renderHeader = () => {
    return <SearchBar placeholder="Type here..." lightTheme round />;
  }
  renderFooter = () => {
    if (!this.state.loading) return null;
    return (
      <View style={{paddingVertical: 20, borderTopWidth: 1, borderColor: '#CED0CE'}}>
        <ActivityIndicator animating size='large' />
      </View>
    )
  }
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={[styles.container]}>
        <View style={[Masonry.row, {flex: 0.3}]}>
          <Text style={[styles.welcomeText, Masonry.hugRightEdge, ]}> FlatList Example </Text>
        </View>

        <View style={[Masonry.row, {backgroundColor: 'white'}]}>
          <List
          containerStyle={{ borderBottomWidth: 0}}
          style={{flex: 1}}>
            <FlatList
              data={this.state.people}
              keyExtractor={item => item.slogan}
              ItemSeparatorComponent={this.renderSeparator}
              ListHeaderComponent={this.renderHeader}
              ListFooterComponent={this.renderFooter}
              renderItem={ ({item}) => (<ListItem
                                        style={styles.personListItem}
                                        containerStyle={{ borderBottomWidth: 0}}
                                        title={`${item.name}  `}
                                        subtitle={`${item.slogan}`}
                                        />
                          )}
            />
          </List>
        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 16,
    margin: 16,
  },
  personList: {
    color: 'white',
    flex: 1
  },
  personListItem: {
    backgroundColor: 'white',
    paddingTop: 32,
    paddingBottom: 32
  },
  welcomeText: {
    fontSize: 28,
    color: 'white',
    padding: 20,
    backgroundColor: 'black'
  },
  container: {
    flex: 1,
    backgroundColor: Colors.grayGunmetal,
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
});

export default FlatListScreen;
