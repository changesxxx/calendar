import dayjs from 'dayjs'

import _ from 'lodash'

export function test() {
  dayjs.locale('en', {
    weekStart: 1, // 设置周一为一周的起始日，0 代表周日，1 代表周一，以此类推
  })
  // const arrayOfArrays = _.times(5, () => _.times(7, () => 0))

  /*  console.log('当前日期', dayjs().day())
  console.log('本月第一天', dayjs().startOf('M').format('DD/MM/YYYY'))
  // console.log('本月最后一天', dayjs().endOf('M').format('DD/MM/YYYY'))

  // dayjs().startOf('M').startOf('w').format('DD/MM/YYYY').format('DD/MM/YYYY')
  console.log(
    '本周第一天',
    dayjs().startOf('M').startOf('w'),
    dayjs().startOf('M').startOf('w').format('YYYY-MM-DD'),
    dayjs().startOf('M').startOf('w').day(),
  ) */
}

/* 
    获取当前日历页第一天日期
*/
function getCurrentPageFirstDay(year, month) {
  dayjs.locale('en', {
    weekStart: 1, // 设置周一为一周的起始日，0 代表周日，1 代表周一，以此类推
  })

  const date = dayjs().set('YYYY', year).set('M', month)
}
