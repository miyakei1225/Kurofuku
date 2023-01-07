import { RootTabScreenProps } from '../../types'
import { Avatar, Box, Center, HStack, ScrollView, Text, VStack } from 'native-base'
import { FlatList, StyleSheet, View } from 'react-native'
import { useState } from 'react'

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44
//   }
// })

export default function RequestScreen({ navigation }: RootTabScreenProps<'Request'>) {
  const data = [
    { key: 'ケンタッキー', text: '飲みに行きましょう！', isOnline: true },
    { key: 'サラダホープ', text: '買い物をお願いします。' },
    { key: 'プリン', text: '肩たたきをしてほしいです！' },
    { key: 'グリコ', text: '一緒に映画を観たい', isOnline: true },
    { key: 'キットカット', text: 'ごはんに行きたいです。' },
    { key: 'ドーナツ', text: '限定品の抽選について来てほしいです！', isOnline: true },
    { key: '焼肉さん', text: 'スポーツがしたいです', isOnline: true },
    { key: 'ポテチ2世', text: 'サウナに行きましょう' },
    { key: 'ボールさん', text: '自転車のパンクを直してほしい' },
    { key: 'サンドイッチウーマン', text: 'ライブに行ってくれる人いませんか？', isOnline: true }
  ]

  const [listData, setListData] = useState(data)
  return (
    <ScrollView w={['100%', '100%']} h="100">
      <Box bgColor="white">
        <View>
          <Center>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <Box
                  maxW={'100%'}
                  borderBottomWidth="1"
                  _dark={{
                    borderColor: 'muted.50'
                  }}
                  borderColor="muted.800"
                  pl={['0', '4']}
                  pr={['0', '5']}
                  py="2"
                >
                  <HStack alignItems={'center'} space={2}>
                    <Avatar
                      bg="green.500"
                      source={{
                        uri: 'https://picsum.photos/200/?random=1'
                      }}
                    >
                      {item.isOnline ? <Avatar.Badge bg="green.500" /> : null}
                    </Avatar>
                    <VStack>
                      <Text fontWeight={'bold'}>{item.key}</Text>
                      <Text color={'gray'}>【依頼内容】</Text>
                      <Text>{item.text}</Text>
                    </VStack>
                  </HStack>
                </Box>
              )}
            />
          </Center>
        </View>
      </Box>
    </ScrollView>
  )
}
