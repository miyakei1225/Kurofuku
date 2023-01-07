import { RootTabScreenProps } from '../../types'
import {
  AspectRatio,
  Avatar,
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Image,
  ScrollView,
  Spacer,
  Stack,
  Text,
  VStack
} from 'native-base'
import { AntDesign, FontAwesome, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons'

export default function MyPageScreen({ navigation }: RootTabScreenProps<'MyPage'>) {
  return (
    <ScrollView w={['100%', '100%']} h="100">
      <Box bgColor="white">
        <VStack space={1} alignItems="center" mt={10}>
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
        {/* <HStack ml={1.5} mt="10"> */}
        <Flex direction="row">
          <Box
            maxW="180"
            maxH="50%"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: 'coolGray.600',
              backgroundColor: 'gray.700'
            }}
            _web={{
              shadow: 2,
              borderWidth: 0
            }}
            _light={{
              backgroundColor: 'gray.50'
            }}
          >
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Center>
                  <FontAwesome name="credit-card" size={80} color="black" />
                </Center>
              </AspectRatio>
            </Box>
            <Center>
              <Divider
                my="2"
                _light={{
                  // bg: 'muted.800'
                  bg: 'gray.300'
                }}
                _dark={{
                  bg: 'white'
                }}
                w="32"
              />
            </Center>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Center>
                  <Text
                    fontSize="xs"
                    _light={{
                      color: 'black'
                    }}
                    _dark={{
                      color: 'violet.400'
                    }}
                    fontWeight="500"
                    ml="-0.5"
                    mt="-4"
                  >
                    決済情報
                  </Text>
                </Center>
              </Stack>
              {/* TODO: テキスト部分消す */}
              <Text fontWeight="400">
                Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known
                for its parks and nightlife.
              </Text>
            </Stack>
          </Box>
          <Spacer />
          <Box>
            <Box
              maxW="180"
              maxH="50%"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: 'coolGray.600',
                backgroundColor: 'gray.700'
              }}
              _web={{
                shadow: 2,
                borderWidth: 0
              }}
              _light={{
                backgroundColor: 'gray.50'
              }}
            >
              <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Center>
                    <AntDesign name="setting" size={80} color="black" />
                  </Center>
                </AspectRatio>
              </Box>
              <Center>
                <Divider
                  my="2"
                  _light={{
                    // bg: 'muted.800'
                    bg: 'gray.300'
                  }}
                  _dark={{
                    bg: 'white'
                  }}
                  w="32"
                />
              </Center>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Center>
                    <Text
                      fontSize="xs"
                      _light={{
                        color: 'black'
                      }}
                      _dark={{
                        color: 'violet.400'
                      }}
                      fontWeight="500"
                      ml="-0.5"
                      mt="-4"
                    >
                      各種設定
                    </Text>
                  </Center>
                </Stack>
                {/* TODO: テキスト部分消す */}
                <Text fontWeight="400">
                  Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known
                  for its parks and nightlife.
                </Text>
              </Stack>
            </Box>
          </Box>
          {/* </HStack> */}
        </Flex>
        <HStack ml={1.5}>
          <Box
            maxW="180"
            maxH="50%"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: 'coolGray.600',
              backgroundColor: 'gray.700'
            }}
            _web={{
              shadow: 2,
              borderWidth: 0
            }}
            _light={{
              backgroundColor: 'gray.50'
            }}
          >
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Center>
                  <FontAwesome5 name="history" size={80} color="black" />
                </Center>
              </AspectRatio>
            </Box>
            <Center>
              <Divider
                my="2"
                _light={{
                  // bg: 'muted.800'
                  bg: 'gray.300'
                }}
                _dark={{
                  bg: 'white'
                }}
                w="32"
              />
            </Center>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Center>
                  <Text
                    fontSize="xs"
                    _light={{
                      color: 'black'
                    }}
                    _dark={{
                      color: 'violet.400'
                    }}
                    fontWeight="500"
                    ml="-0.5"
                    mt="-4"
                  >
                    履歴
                  </Text>
                </Center>
              </Stack>
              {/* TODO: テキスト部分消す */}
              <Text fontWeight="400">
                Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known
                for its parks and nightlife.
              </Text>
            </Stack>
          </Box>
          <Box>
            <Box
              maxW="180"
              maxH="50%"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: 'coolGray.600',
                backgroundColor: 'gray.700'
              }}
              _web={{
                shadow: 2,
                borderWidth: 0
              }}
              _light={{
                backgroundColor: 'gray.50'
              }}
            >
              <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Center>
                    <MaterialIcons name="quick-contacts-mail" size={80} color="black" />
                  </Center>
                </AspectRatio>
              </Box>
              <Center>
                <Divider
                  my="2"
                  _light={{
                    // bg: 'muted.800'
                    bg: 'gray.300'
                  }}
                  _dark={{
                    bg: 'white'
                  }}
                  w="32"
                />
              </Center>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Center>
                    <Text
                      fontSize="xs"
                      _light={{
                        color: 'black'
                      }}
                      _dark={{
                        color: 'violet.400'
                      }}
                      fontWeight="500"
                      ml="-0.5"
                      mt="-4"
                    >
                      お問合せ
                    </Text>
                  </Center>
                </Stack>
                {/* TODO: テキスト部分消す */}
                <Text fontWeight="400">
                  Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known
                  for its parks and nightlife.
                </Text>
              </Stack>
            </Box>
          </Box>
        </HStack>
        <HStack ml={1.5}>
          <Box
            maxW="180"
            maxH="50%"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: 'coolGray.600',
              backgroundColor: 'gray.700'
            }}
            _web={{
              shadow: 2,
              borderWidth: 0
            }}
            _light={{
              backgroundColor: 'gray.50'
            }}
          >
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image
                  source={{
                    uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg'
                  }}
                  alt="image"
                />
              </AspectRatio>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Center>
                  <Text
                    fontSize="xs"
                    _light={{
                      color: 'black'
                    }}
                    _dark={{
                      color: 'violet.400'
                    }}
                    fontWeight="500"
                    ml="-0.5"
                    mt="-1"
                  >
                    一番下左
                  </Text>
                </Center>
              </Stack>
              {/* TODO: テキスト部分消す */}
              <Text fontWeight="400">
                Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known
                for its parks and nightlife.
              </Text>
            </Stack>
          </Box>
          <Box>
            <Box
              maxW="180"
              maxH="50%"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: 'coolGray.600',
                backgroundColor: 'gray.700'
              }}
              _web={{
                shadow: 2,
                borderWidth: 0
              }}
              _light={{
                backgroundColor: 'gray.50'
              }}
            >
              <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image
                    source={{
                      uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg'
                    }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Center>
                    <Text
                      fontSize="xs"
                      _light={{
                        color: 'black'
                      }}
                      _dark={{
                        color: 'violet.400'
                      }}
                      fontWeight="500"
                      ml="-0.5"
                      mt="-1"
                    >
                      一番下右
                    </Text>
                  </Center>
                </Stack>
                {/* TODO: テキスト部分消す */}
                <Text fontWeight="400">
                  Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city is also known
                  for its parks and nightlife.
                </Text>
              </Stack>
            </Box>
          </Box>
        </HStack>
        ;
      </Box>
    </ScrollView>
  )
}
