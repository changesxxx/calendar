import dayjs from 'dayjs'

import _ from 'lodash'

export function test() {
  const arrayOfArrays = _.times(5, () => _.times(7, () => 0))

  console.log(arrayOfArrays)
  console.log('本月第一天', dayjs().startOf('M').format('DD/MM/YYYY'))
  // console.log('本月最后一天', dayjs().endOf('M').format('DD/MM/YYYY'))

  // dayjs().startOf('M').startOf('w').format('DD/MM/YYYY')
  console.log('本周第一天', dayjs().startOf('M').startOf('w').day())
}
