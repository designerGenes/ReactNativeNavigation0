import React from 'react';
import {StyleSheet} from 'react-native';

export default {
  // return {
    green: '#6EEB83',
    blue: '#1BE7FF',
    orange: '#FF5714',
    red: '#F71735',
    grayMid: '#595959',
    grayLight: '#747274',
    grayGunmetal: '#2E2E3A',
    screenColors: StyleSheet.create({
      green: { color: this.green },
      blue: { color: this.blue },
      orange: { color: this.orange },
      red: { color: this.red },
    }),
    grays: StyleSheet.create({
      grayMid: { color: this.grayMid },
      grayLight: { color: this.grayLight },
      grayGunmetal: { color: this.grayGunmetal },
    })
  // }
};
