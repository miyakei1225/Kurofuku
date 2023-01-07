import * as Yup from 'yup'

export const FAVOR_CREATE_SCHEMA = Yup.object().shape({
  userName: Yup.string().max(15, '15文字以下で入力してください').required('Required'),
  email: Yup.string().email('Invalid email address').required('Required')
})
