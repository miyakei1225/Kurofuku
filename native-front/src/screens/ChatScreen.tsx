import { useCallback, useState } from 'react'
import { Text, View, StyleSheet, Dimensions, Platform } from 'react-native'
import { Video } from 'expo-av'
// import { WebView } from 'react-native-webview';
import { GiftedChat, IMessage, Send } from 'react-native-gifted-chat'
import { RootTabScreenProps } from '../../types'
const { width } = Dimensions.get('window')
// TODO: add firebase?

export default function ChatScreen({ navigation }: RootTabScreenProps<'Chat'>) {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any'
      }
    }
  ])

  const onSend = (newMessages: any) => {
    setMessages((prevMessages) => [reply(), ...newMessages, ...prevMessages])
  }

  const reply = () => {
    return {
      _id: 1,
      text: 'Hello!',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any'
      }
    }
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => onSend(newMessages)}
      user={{
        _id: 1
      }}
      renderSend={(props) => {
        return (
          <Send {...props} containerStyle={styles.sendContainer}>
            <Text style={styles.sendButtonTitile}>送信</Text>
          </Send>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  video: {
    width: width / 1.5,
    height: 150,
    margin: 13,
    borderRadius: 13
  },
  sendContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 15
  },
  sendButtonTitile: {
    color: '#4fa9ff',
    fontWeight: 'bold'
  }
})
