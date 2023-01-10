import { RootTabScreenProps } from '../../types'
import { Avatar, Box, Button, Center, HStack, Text, VStack } from 'native-base'
import { FlatList } from 'react-native'

export default function FavorListScreen({ navigation }: RootTabScreenProps<'FavorList'>) {
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

  return (
    <Box bgColor="white">
      <Center>
        <Button
          borderRadius="full"
          colorScheme="success"
          onPress={() => {
            navigation.navigate('FavorRegister')
          }}
        >
          依頼登録
        </Button>
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
    </Box>
  )
}
