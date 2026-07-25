import Constants from 'expo-constants';
import type { ComponentType } from 'react';

import type { CatalogueItem } from './data';
import { usesManualTryOn } from './runtime';
import ExpoGoTryOn from './TryOnExpoGo';

type Props = {
  initial: CatalogueItem;
  onClose: () => void;
};

export default function TryOnScreen(props: Props) {
  // Expo Go cannot load the custom native face detector. Internal/standalone
  // APKs are not Store Client builds and must open TryOnNative.
  const isExpoGo = usesManualTryOn(Constants.executionEnvironment);

  if (isExpoGo) {
    return <ExpoGoTryOn {...props} />;
  }

  const NativeTryOn = require('./TryOnNative').default as ComponentType<Props>;
  return <NativeTryOn {...props} />;
}
