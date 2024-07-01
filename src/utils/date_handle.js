import dayjs from 'dayjs'

import _ from 'lodash'
import cache from './cache'

const calendarArray = _.times(5, () => _.times(7, () => 0))

export function getCalendar(
  year = cache.getItem('date').year,
  month = cache.getItem('date').month,
) {
  //获取指定日历页第一天
  const firstDay = getCurrentPageFirstDay(year, month)

  //填充日历数组
  return fillCalendarArray(firstDay)
}

/* 
    获取当前日历页第一天日期
*/
function getCurrentPageFirstDay(year, month) {
  dayjs.locale('en', {
    weekStart: 1, // 设置周一为一周的起始日，0 代表周日，1 代表周一，以此类推
  })

  const date = dayjs().set('year', year).set('month', month)

  const firstDay = date.startOf('M').startOf('w')

  return firstDay
}

//填充日历数组
function fillCalendarArray(firstDay) {
  let day = 0
  //5行7列的天数 格式为:[[...7天],...,[...]] 每个[...7天代表一个周]

  //填充天数
  calendarArray.forEach((week) => {
    for (let index = 0; index < week.length; index++) {
      week[index] = firstDay.add(day, 'day')
      day++
    }
  })

  return calendarArray
}

/* 
获取当前日期
*/
export function getToday() {
  return dayjs()
}

export function getTodayIndex(today) {
  const index = calendarArray.findIndex((w) =>
    w.some(
      (d) =>
        d.get('date') === today.get('date') &&
        d.get('month') === today.get('month'),
    ),
  )
  return index
}

export function getDayByFormatMonth(day) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  return months[day.get('month')]
}
