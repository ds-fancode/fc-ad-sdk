import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Banner, Interstitial} from 'react-native-ad-manager';
import {
  AD_UNIT_LIST,
  getAdUnitID,
  getTransformationStyle,
  getWidthHeight,
} from '../../utils/utils';

interface IProps {
  containerStyle?: any;
  containerSize: string;
  adUnitList: AD_UNIT_LIST;
  onAdLoaded?: (e: any) => void;
  onAdFailed?: () => void;
  onAdClicked?: () => void;
}

export default function GamBanner(props: IProps) {
  const [containerWidth, containerHeight] = getWidthHeight(props.containerSize);

  const adIDindex = getAdUnitID(
    props.adUnitList,
    containerWidth,
    containerHeight,
  );
  const {id: adUnitID, size: adSize} = props.adUnitList[adIDindex.index];

  const [adWidth, adHeight] = getWidthHeight(adSize);

  const onAdfailed = (e: any) => {
    console.log('onAdfailed: ', e);
    props.onAdFailed && props.onAdFailed();
  };

  const onAdOpened = () => {
    props.onAdClicked && props.onAdClicked();
  };

  const onAdLoad = (e: any) => {
    console.log('onAdLoad: ', e);
    props.onAdLoaded && props.onAdLoaded(e);
  };

  const transformStyle = React.useMemo(
    () =>
      getTransformationStyle(
        containerWidth,
        containerHeight,
        adWidth,
        adHeight,
      ),
    [containerWidth, containerHeight],
  );

  return (
    <View
      style={[
        {
          ...props.containerStyle,
          width: containerWidth,
          height: containerHeight,
        },
        styles.container,
      ]}>
      <View style={transformStyle}>
        <Banner
          style={styles.bannerContainer}
          onAdFailedToLoad={onAdfailed}
          onAdOpened={onAdOpened}
          adSize={`${adWidth}x${adHeight}` as any}
          onAdLoaded={onAdLoad}
          validAdSizes={['fluid', `${adWidth}x${adHeight}`]}
          adUnitID={adUnitID}
          testDevices={[Interstitial.simulatorId]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  bannerContainer: {
    resizeMode: 'cover',
    overflow: 'hidden',
    zIndex: 5,
    top: 0,
    left: 0,
    width: 200,
    height: 100,
  },
});
