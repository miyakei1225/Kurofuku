import { RootStackScreenProps } from '../../types'
import { Box, ScrollView, Text } from 'native-base'
import { Button, TextInput, View } from 'react-native'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default function FavorRegisterScreen({ navigation }: RootStackScreenProps<'FavorRegister'>) {
  return (
    <ScrollView w={['100%', '100%']} h="100">
      <Box bgColor="white">
        <View>
          <Text>登録ページ</Text>
          {
            // validationSchema={Yup.object({
            //   firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
            //   lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
            //   email: Yup.string().email('Invalid email address').required('Required')
            // }
          }
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => console.log(values)}
            // validationSchema={Yup.object({
            //   firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
            //   lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
            //   email: Yup.string().email('Invalid email address').required('Required')
            // }
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <Text>Email:</Text>
                <TextInput onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email} />
                <Text>Password:</Text>
                <TextInput
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
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
