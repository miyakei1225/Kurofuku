import { RootStackScreenProps } from '../../types'
import { Box, ScrollView, Text } from 'native-base'
import { Button, TextInput, View } from 'react-native'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  userName: Yup.string().max(15, '15文字以下で入力してください').required('Required'),
  email: Yup.string().email('Invalid email address').required('Required')
})

export default function FavorRegisterScreen({ navigation }: RootStackScreenProps<'FavorRegister'>) {
  return (
    <ScrollView w={['100%', '100%']} h="100">
      <Box bgColor="white">
        <View>
          <Text>登録ページ</Text>
          <Formik
            initialValues={{ userName: '', email: '', password: '' }}
            onSubmit={(values) => console.log(values)}
            validationSchema={schema}
          >
            {({ handleChange, handleBlur, handleSubmit, isValid, isSubmitting, values, errors, touched }) => (
              <View>
                <Text>ユーザー名:</Text>
                <TextInput
                  onChangeText={handleChange('userName')}
                  onBlur={handleBlur('userName')}
                  value={values.userName}
                />
                {errors.userName && touched.userName ? <Text>{errors.userName}</Text> : null}
                <Text>Email:</Text>
                <TextInput onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email} />
                {errors.email && touched.email ? <Text>{errors.email}</Text> : null}
                <Text>Password:</Text>
                <TextInput
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                {errors.password && touched.password ? <Text>{errors.password}</Text> : null}
                {/* @ts-ignore */}
                <Button onPress={handleSubmit} title="Submit" />
              </View>
            )}
          </Formik>
        </View>
      </Box>
    </ScrollView>
  )
}
