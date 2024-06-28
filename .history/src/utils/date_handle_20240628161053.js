import dayjs from 'dayjs'

import _ from 'lodash'

export function test() {
  //获取指定日历页第一天
  getCurrentPageFirstDay(2024, 6)
}

/* 
    获取当前日历页第一天日期
*/
function getCurrentPageFirstDay(year, month) {
  dayjs.locale('en', {
    weekStart: 1, // 设置周一为一周的起始日，0 代表周日，1 代表周一，以此类推
  })

  //月份从 0 开始计算。所以要进行-1
  const date = dayjs()
    .set('YYYY', year)
    .set('M', month - 1)

  const firstDay = date.startOf('M').startOf('w')

  return firstDay
}

function fillCalendarArray() {
  const arrayOfArrays = _.times(5, () => _.times(7, () => 0))
}
