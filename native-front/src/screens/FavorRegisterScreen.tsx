import { RootStackScreenProps } from '../../types'
import { Box, FormControl, Input, ScrollView, Stack, Text } from 'native-base'
import { View } from 'react-native'

export default function FavorRegisterScreen({ navigation }: RootStackScreenProps<'FavorRegister'>) {
  return (
    <ScrollView w={['100%', '100%']} h="100">
      <Box bgColor="white">
        <View>
          <Text>登録ページ</Text>
          <FormControl>
            <Stack space={5}>
              <Stack>
                <FormControl.Label>Username</FormControl.Label>
                <Input variant="underlined" p={2} placeholder="Username" />
              </Stack>
              <Stack>
                <FormControl.Label>Password</FormControl.Label>
                <Input variant="underlined" p={2} placeholder="Password" />
              </Stack>
            </Stack>
          </FormControl>
        </View>
      </Box>
    </ScrollView>
  )
}
