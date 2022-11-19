import { StyleSheet } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import { View } from '../components/Themed'
import { RootTabScreenProps } from '../../types'
import { Avatar, Box, Divider, HStack, ScrollView, Text, VStack } from 'native-base'
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'

export default function MyPageScreen({ navigation }: RootTabScreenProps<'MyPage'>) {
  return (
    <ScrollView w={['100%', '100%']} h="100">
      <Box bgColor="white">
        <VStack space={1} alignItems="center">
          <Avatar
            alignSelf="center"
            bg="amber.500"
            size="lg"
            source={{
              uri: 'https://pds.exblog.jp/pds/1/201106/06/07/a0136507_16513511.jpg'
            }}
          >
            User Icon
          </Avatar>
          <Text fontSize="xl">
            ミヤケイ
            <AntDesign name="rightcircle" size={16} color="black" />
          </Text>
          <HStack>
            <FontAwesome name="star" size={24} color="lightskyblue" />
            <FontAwesome name="star" size={24} color="lightskyblue" />
            <FontAwesome name="star" size={24} color="lightskyblue" />
            <FontAwesome name="star-half-empty" size={24} color="lightskyblue" />
            <FontAwesome name="star-o" size={24} color="lightskyblue" />
            <Text fontSize="xl" ml={2}>
              12
              <Ionicons name="md-shield-checkmark" size={24} color="green" />
            </Text>
            <Text fontSize="md" ml={2}>
              本人確認済
            </Text>
          </HStack>
          <Divider
            my="2"
            _light={{
              // bg: 'muted.800'
              bg: 'gray.300'
            }}
            _dark={{
              bg: 'white'
            }}
            w="280"
          />
        </VStack>
      </Box>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})
