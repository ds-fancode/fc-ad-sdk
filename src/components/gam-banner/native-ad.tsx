import React from 'react';
import {Text, View} from 'react-native';
import {withNativeAd} from 'react-native-ad-manager';

function NativeAd(props: any) {
  console.log('Native porops: ', props);
  return (
    <View>
      <Text>NativeAd</Text>
    </View>
  );
}

export default withNativeAd(NativeAd);
