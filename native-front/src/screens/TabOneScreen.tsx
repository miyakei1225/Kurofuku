import { BarCodeScanner } from 'expo-barcode-scanner'
import { Box, View } from 'native-base'
import { useState } from 'react'
import { Alert, Button, StyleSheet } from 'react-native'
import { RootTabScreenProps } from '../../types'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [permission, requestPermission] = BarCodeScanner.usePermissions()
  const [scanning, setScanning] = useState<boolean>(false)

  if (permission?.granted) {
    return (
      <Box>
        <BarCodeScanner
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          onBarCodeScanned={(scannerResult) => {
            if (scanning) {
            } else {
              setScanning(true)
              Alert.alert('スキャン結果', scannerResult.data, [
                {
                  text: '閉じる',
                  onPress: () => {
                    setScanning(false)
                  }
                }
              ])
            }
          }}
          style={styles.barCodeScanner}
        />
      </Box>
    )
  } else {
    return (
      <View style={styles.container}>
        <Button title="カメラを開く" onPress={requestPermission} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  barCodeScanner: {
    height: '100%',
    width: '100%'
  }
})
