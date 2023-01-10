import * as Yup from 'yup'

export const FAVOR_CREATE_SCHEMA = Yup.object().shape({
  userName: Yup.string().max(15, '15文字以下で入力してください').required('この項目は必須です'),
  email: Yup.string().email('不正な形式のメールアドレスです').required('この項目は必須です')
})
