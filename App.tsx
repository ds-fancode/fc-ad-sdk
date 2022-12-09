import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import GamBanner from './src/components/gam-banner/gam-banner';

const AD_UNITS = [
  {id: '/22693816480/nativebanner', size: '300x250'},
  {id: '/22693816480/nativebanner', size: '1200x600'},
  {id: '/22693816480/banner//video', size: '320x50'},
];

const App = () => {
  return (
    <SafeAreaView style={{}}>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{}}>
        <View style={styles.view1}>
          <GamBanner
            containerSize={'300x300'}
            adUnitList={AD_UNITS}
            containerStyle={{
              backgroundColor: '#00000088',
              borderWidth: 1,
              borderColor: 'blue',
              overflow: 'hidden',
              borderRadius: 12,
            }}
          />
        </View>

        <View style={styles.view2}>
          <GamBanner
            containerSize={'320x300'}
            adUnitList={AD_UNITS}
            containerStyle={{
              backgroundColor: '#213488',
              borderRadius: 12,
            }}
          />
        </View>

        <View style={styles.view3}>
          <GamBanner
            containerSize={'300x60'}
            adUnitList={AD_UNITS}
            containerStyle={{
              backgroundColor: '#ff3422',
              borderRadius: 12,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  view1: {
    width: '100%',
    height: 300,
    backgroundColor: 'yellow',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    width: '100%',
    height: 300,
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    width: '100%',
    height: 300,
    backgroundColor: 'yellow',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
