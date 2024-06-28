import dayjs from 'dayjs'

import _ from 'lodash'
import cache from './cache'

export function getCalendar() {
  //获取当前日期数据
  const { year, month } = cache.getItem('date')

  //获取指定日历页第一天
  const firstDay = getCurrentPageFirstDay(2024, 6)

  //填充日历数组
  fillCalendarArray(firstDay)
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

//填充日历数组
function fillCalendarArray(firstDay) {
  let day = 0
  //5行7列的天数 格式为:[[...7天],...,[...]] 每个[...7天代表一个周]
  const calendarArray = _.times(5, () => _.times(7, () => 0))

  //填充天数
  calendarArray.forEach((week) => {
    for (let index = 0; index < week.length; index++) {
      week[index] = firstDay.add(day, 'day').get('date')
      day++
    }
  })
  console.log(calendarArray)
}
