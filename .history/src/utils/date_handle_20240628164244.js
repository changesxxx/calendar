import dayjs from 'dayjs'

import _ from 'lodash'

export function test() {
  //获取指定日历页第一天
  const firstDay = getCurrentPageFirstDay(2024, 6)

  //填充日历数组
  fillCalendarArray(firstDay)

  calculatePerformance(fillCalendarArray)
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

function fillCalendarArray(firstDay) {
  let day = 0
  //5行7列的天数 格式为:[[...7天],...,[...]] 每个[...7天代表一个周]
  const calendarArray = _.times(5, () => _.times(7, () => 0))

  calendarArray.forEach((week) => {
    for (let index = 0; index < week.length; index++) {
      week[index] = firstDay.clone().add(day, 'day').get('date')
      day++
    }
  })

  console.log(calendarArray)
}

function calculatePerformance(callback) {
  const start = performance.now() // 记录开始时间

  // 执行需要评估性能的代码块
  callback()

  const end = performance.now() // 记录结束时间
  const duration = end - start // 计算执行时间，单位是毫秒

  console.log(`执行时间：${duration} 毫秒`)
}
