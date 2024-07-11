import dayjs from 'dayjs'
import toObject from 'dayjs/plugin/toObject'
import duration from 'dayjs/plugin/duration'
import objectSupport from 'dayjs/plugin/objectSupport'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

import _ from 'lodash'
import cache from './cache'

const calendarArray = _.times(5, () => _.times(7, () => 0))

dayjs.extend(toObject)
dayjs.extend(duration)
dayjs.extend(objectSupport)
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

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
  calendarArray.forEach((week, index) => {
    const dayArr = []
    for (let index = 0; index < week.length; index++) {
      dayArr[index] = firstDay.add(day, 'day').toObject()
      day++
    }
    calendarArray[index] = dayArr
  })

  return calendarArray
}

/* 
获取当前日期
*/
export function getToday() {
  return dayjs().toObject()
}

export function getTodayIndex(today) {
  // console.log('getTodayIndex', today)

  const index = calendarArray.findIndex((w) =>
    w.some((d) => d.date === today.date && d.months === today.months),
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

  return months[day.months]
}

export function getDayByFormatWeek(index) {
  const weeks = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]

  return weeks[index]
}

/* 
  获取最近的年份 点击年时展现的列表数据
*/
export function recentYears(day) {
  const yearArray = _.times(3, () => _.times(4, () => 0))

  let count = 1

  const startYeat = dayjs(day).subtract(5, 'year')
  console.log(day, startYeat)

  //填充月或年
  yearArray.forEach((el) => {
    for (let index = 0; index <= 3; index++) {
      el[index] = startYeat
        .add(count, 'year')
        // .set('month', count - 1)
        .toObject()
      count += 1
    }
  })

  console.log(yearArray)
  return yearArray
}

export function recentMonth(day) {
  const monthArray = _.times(3, () => _.times(4, () => 0))
  let count = 1

  //填充月或年
  monthArray.forEach((el) => {
    for (let index = 0; index <= 3; index++) {
      el[index] = dayjs()
        .set('year', day.years)
        .set('month', count - 1)
        .toObject()
      count += 1
    }
  })

  return monthArray
}

export default dayjs
