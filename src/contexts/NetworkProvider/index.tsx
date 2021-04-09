import React, {
  ReactElement, useContext, useEffect, useState,
} from 'react';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

import type { Network } from 'src/types';
import BlockedView from './styles';

export interface Props {
  children: ReactElement;
}

const defaultConfig: Network = {
  isConnected: true,
  isReachable: true,
};

export const NetworkContext = React.createContext<Network>(defaultConfig);

export default function NetworkProvider({ children }: Props): ReactElement {
  const [isConnected, setIsConnected] = useState<boolean>(true);
  const [isReachable, setIsReachable] = useState<boolean>(true);

  function handleConnectivityChange(network: NetInfoState) {
    setIsConnected(network.isConnected || false);
    setIsReachable(network.isInternetReachable || false);
  }

  useEffect(() => {
    const listener = NetInfo.addEventListener(handleConnectivityChange);
    return listener;
  }, []);

  // COLOCAR TOAST
  // useEffect(() => {
  //   if (isConnected) {

  //   } else {

  //   }
  // }, [isConnected]);

  function renderHandler() {
    if (isConnected) return <></>;
    return <BlockedView />;
  }

  return (
    <NetworkContext.Provider value={{ isConnected, isReachable }}>
      {renderHandler()}
      {children}
    </NetworkContext.Provider>
  );
}

export function useNetwork(): Network {
  return useContext(NetworkContext);
}
