import { RootStackScreenProps } from '../../types'
import { Box, Center, FormControl, Input, ScrollView, Stack, Text, WarningOutlineIcon } from 'native-base'
import { Button, View } from 'react-native'
import { Formik } from 'formik'
import { FAVOR_CREATE_SCHEMA } from '../features/Favors/validations/schema'

export default function FavorRegisterScreen({ navigation }: RootStackScreenProps<'FavorRegister'>) {
  return (
    <ScrollView w={['100%', '100%']} h="100%">
      <Box bgColor="white">
        <View>
          <Text>登録ページ</Text>
          <Formik
            initialValues={{ userName: '', email: '', password: '' }}
            onSubmit={(values) => console.log(values)}
            validationSchema={FAVOR_CREATE_SCHEMA}
          >
            {({ handleChange, handleBlur, handleSubmit, isValid, isSubmitting, values, errors, touched }) => (
              <View>
                <Center>
                  <Stack space={4}>
                    <FormControl w="100%">
                      <FormControl.Label>ユーザー名:</FormControl.Label>
                      <Input
                        width={'50%'}
                        size={'lg'}
                        onChangeText={handleChange('userName')}
                        onBlur={handleBlur('userName')}
                        value={values.userName}
                        placeholder={'例: 田中 太郎'}
                      />
                      {errors.userName && touched.userName ? (
                        <Text style={{ color: 'red' }}>
                          <Box color={'blue'}>
                            <WarningOutlineIcon size="xs" />
                          </Box>
                          {errors.userName}
                        </Text>
                      ) : null}
                      <FormControl.Label>Email:</FormControl.Label>
                      <Input
                        width={'50%'}
                        size={'lg'}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder={'例: example@email.com'}
                      />
                      {errors.email && touched.email ? (
                        <Text style={{ color: 'red' }}>
                          <WarningOutlineIcon size="xs" />
                          {errors.email}
                        </Text>
                      ) : null}
                      <FormControl.Label>Password:</FormControl.Label>
                      <Input
                        width={'50%'}
                        size={'lg'}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        placeholder={'半角英数字8文字以上で入力してください'}
                      />
                      {errors.password && touched.password ? (
                        <Text style={{ color: 'red' }}>
                          <WarningOutlineIcon size="xs" />
                          {errors.password}
                        </Text>
                      ) : null}
                      {/* @ts-ignore */}
                      <Button onPress={handleSubmit} title="Submit" disabled={!isValid || isSubmitting} />
                    </FormControl>
                  </Stack>
                </Center>
              </View>
            )}
          </Formik>
        </View>
      </Box>
    </ScrollView>
  )
}
