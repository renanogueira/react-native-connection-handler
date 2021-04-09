import * as React from 'react';

import { Text } from 'react-native';
import { NetworkProvider, useNetwork } from 'react-native-connection-handler';

export default function App(): React.ReactElement {
  const network = useNetwork();

  // React.useEffect(() => {
  //   toast.show({ message: 'oi', color: '#000' });
  // }, []);

  return (
    <NetworkProvider>
      <>
        <Text>{`Conectado: ${network.isConnected}`}</Text>
        <Text>{`Alcançável: ${network.isReachable}`}</Text>
      </>
    </NetworkProvider>
  );
}
