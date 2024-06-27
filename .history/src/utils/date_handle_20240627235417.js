import dayjs from 'dayjs'

import _ from 'lodash'

export function test() {
  const arrayOfArrays = _.times(5, () => _.times(7, () => 0))

  console.log(arrayOfArrays)
  console.log(dayjs().startOf('M').format('DD/MM/YYYY'))
}
