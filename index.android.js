/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ToastAndroid,
  TouchableHighlight,
  Alert
} from 'react-native';
export class CustomButton extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.customButton} onPress={this.props.onclick}>
        <View style={styles.tab}>
          <Image style={styles.tabImg} source={require('./img/home.png')}></Image>
          <Text style={styles.tabName}>{this.props.text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
export default class AswsomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{
            width: '100%',
            fontSize: 18,
            lineHeight: 36,
            height: 50,
            textAlign: 'center',
            backgroundColor: '#11fddd'
          }}>
            Title
          </Text>
        </View>
        <View style={styles.banner}>
          <Text>banner</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
        </View>
        <View style={styles.bottom}>
          <CustomButton onclick={() => {
            ToastAndroid.show('点击Tab1', ToastAndroid.SHORT)
          }} text='点击Tab1'></CustomButton>
          <CustomButton onclick={() => {
            ToastAndroid.show('点击Tab2', ToastAndroid.SHORT)
          }} text='点击Tab2'></CustomButton>
          <CustomButton onclick={() => {
            ToastAndroid.show('点击Tab3', ToastAndroid.SHORT)
          }} text='点击Tab3'></CustomButton>
          <CustomButton onclick={() => {
            ToastAndroid.show('点击Tab4', ToastAndroid.SHORT)
          }} text='点击Tab4'></CustomButton>
          <CustomButton onclick={() => {
            ToastAndroid.show('点击Tab5', ToastAndroid.SHORT)
          }} text='点击Tab5'></CustomButton>
          {/*
            <TouchableHighlight onPress={() => {
              Alert.alert('你点击了按钮', 'tab1', [1, 2, 3])
            }} style={styles.tab}>
              <View style={styles.tab}>
                <Image style={styles.tabImg} source={require('./img/home.png')}></Image>
                <Text style={styles.tabName}>Tab1</Text>
              </View>
            </TouchableHighlight>
          <TouchableHighlight onPress={() => {
            Alert.alert('你点击了按钮', 'tab2', [1, 2, 3])
          }} style={styles.tab}>
            <View style={styles.tab}>
              <Image style={styles.tabImg} source={require('./img/home.png')}></Image>
              <Text style={styles.tabName}>Tab2</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {
            ToastAndroid.show('你点击了按钮tab3', ToastAndroid.SHORT)
          }} style={styles.tab}>
            <View style={styles.tab}>
              <Image style={styles.tabImg} source={require('./img/home.png')}></Image>
              <Text style={styles.tabName}>Tab3</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {
            Alert.alert('你点击了按钮', 'tab4', [1, 2, 3])
          }} style={styles.tab}>
            <View style={styles.tab}>
              <Image style={styles.tabImg} source={require('./img/home.png')}></Image>
              <Text style={styles.tabName}>Tab4</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {
            Alert.alert('你点击了按钮', 'tab5', [1, 2, 3])
          }} style={styles.tab}>
            <View style={styles.tab}>
              <Image style={styles.tabImg} source={require('./img/home.png')}></Image>
              <Text style={styles.tabName}>Tab5</Text>
            </View>
          </TouchableHighlight>
          */}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  title: {
    width: '100%',
    justifyContent: 'flex-start',
    backgroundColor: '#ccaaaa'
  },
  banner: {
    width: '100%',
    height: 160,
    backgroundColor: 'pink'
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#11aaaa'
  },
  bottom: {
    height: 56,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: '#ccaaaa'
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabImg: {
    width: 30,
    height: 30,
    backgroundColor: 'yellow',
    resizeMode: 'contain'
  },
  tabName: {
    backgroundColor: 'purple',
    fontSize: 18,
    textAlign: 'center',
    color: '#990011'
  },
  customButton: {
    flex: 1
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: '#aa1111'
  }
});
AppRegistry.registerComponent('AswsomeProject', () => AswsomeProject);
