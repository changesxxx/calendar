import React, { memo, useState, useEffect, useRef } from 'react'

import EventWrapper from './style'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { categoryListChange, eventListChange } from '@/store/modules/event'

import { useNavigate } from 'react-router-dom'

import { GrCheckmark } from 'react-icons/gr'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import { RxCrossCircled } from 'react-icons/rx'

import dayjs from '@/utils/date_handle'

const CreateEvent = memo(() => {
  const color = [
    '#7991FC',
    '#F9C907',
    '#A0EEE1',
    '#D6D5B7 ',
    '#ECAD9E',
    '#F4606C',
    '#b591ef',
    '#f6abd8',
    '#bd988c',
    '#b6b4b7',
    '#7a24ff',
  ]

  const { categoryList, eventList } = useSelector(
    (state) => ({
      categoryList: state.event.categoryList,
      eventList: state.event.eventList,
    }),
    shallowEqual,
  )

  const navigate = useNavigate()

  //缓存中categoryList发生变法 页面category需重新赋值并加载页面
  useEffect(() => {
    setCategory(categoryList)
  }, [categoryList])

  const dispatch = useDispatch()

  const [category, setCategory] = useState(categoryList)

  //标题input
  const titleInputRef = useRef()
  const [title, setTitle] = useState('')
  //标题是否符合规则
  const [titleCorrect, setTitleCorrect] = useState(true)

  //描述input
  const [describe, setDescribe] = useState('')

  //选中的标签颜色
  const [currentColor, setCurrentColor] = useState(0)
  //展示下拉选项
  const [categoryShow, setCategoryShow] = useState(false)

  //当前类型index
  const [currentCategory, setCurrentCategory] = useState(-1)

  //当前类型名称
  const [categoryTitle, setCategoryTitle] = useState()
  //当前类型颜色
  const [categoryColor, setCategoryColor] = useState()

  //当前输入input
  const inputRef = useRef()

  //选中的标签
  const [selectedCategory, setSelectedCategory] = useState([])

  //当前点击的标签
  const [currentSelectedCategory, setCurrentSelectedCategory] = useState(-1)

  //处理双击事件触发单击事件
  const timer = useRef(null)

  //开始时间
  const [startDate, setstartDate] = useState('')
  //结束时间
  const [endDate, setEndDate] = useState('')

  //开始时间input元素
  const startDateInputRef = useRef(null)
  //结束时间input元素
  const endDateInputRef = useRef(null)

  //开始时间是否符合
  const [startDateCorrect, setStartDateCorrect] = useState(true)
  //结束时间是否符合
  const [endDateCorrect, setEndDateCorrect] = useState(true)

  //选中的时间是否已经别的事件使用
  const [isExist, setisExist] = useState(false)
  const [endIsExist, setEndIsExist] = useState(false)

  //title input内容改变
  function titleInputHandle() {
    setTitle(titleInputRef.current.value)

    if (titleInputRef.current.value !== '') {
      setTitleCorrect(true)
    }
  }

  //inputValue数据发生变化 页面category需重新赋值并加载页面
  function colorItemHandle(index) {
    setCurrentColor(index)
  }

  function categoryShowHandle(e, flag) {
    e.stopPropagation()
    setCategoryShow(flag)
  }

  //添加类型事件
  function addCategoryHandle(e) {
    e.stopPropagation()

    const event = { title: '', color: '#fff' }
    const newList = [...category, event]

    //重新设置页面Category数据
    setCategory(newList)

    //修改类型标签index
    setCurrentCategory(newList.length - 1)
    //修改类型名称内容
    setCategoryTitle('')
    //修改当前颜色
    setCategoryColor('#ffffff')
  }

  //selected-item按钮单击事件
  function selectedItemClick(e, index) {
    console.log('selected-item按钮单击事件')
    e.stopPropagation()

    setCurrentSelectedCategory(index)
  }
  //selected-item按钮删除事件
  function selectedItemDelete(e, index) {
    e.stopPropagation()

    const newSelectedCategory = selectedCategory.filter((s, i) => i !== index)
    setSelectedCategory([...newSelectedCategory])

    setCurrentSelectedCategory(-1)
  }

  //span单击事件 将点击的类型标签添加至容器内展示
  function categoryItemClickHandle(e, index) {
    console.log('单击事件..')

    clearTimeout(timer.current)

    e.stopPropagation()

    function execute() {
      //赋值操作
      const newSelectedCategory = {}
      newSelectedCategory.id = index
      newSelectedCategory.title = category[index].title
      newSelectedCategory.color = category[index].color

      const flag = selectedCategory.find((category) => category.id === index)

      if (flag) {
        return
      } else {
        setSelectedCategory([...selectedCategory, newSelectedCategory])
      }
    }

    timer.current = setTimeout(execute, 230)
  }

  //span双击事件 to input
  function categoryItemHandle(e, index) {
    console.log('双击事件..')
    clearTimeout(timer.current)
    e.stopPropagation()

    //修改类型标签index
    setCurrentCategory(index)
    //修改类型名称内容
    setCategoryTitle(category[index].title)
    //修改当前颜色
    setCategoryColor(category[index].color)
  }

  //保存标签修改
  function categoryItemInputHandle(e, attributeName) {
    if (attributeName === 'title') {
      setCategoryTitle(e.target.value)
    } else {
      setCategoryColor(e.target.value)
    }
  }

  //输入框失焦后保存数据
  function inputBlurHandle(e) {
    //处理父元素点击后触发此事件
    if (currentCategory === -1) {
      return
    }

    if (inputRef.current.value === '') {
      console.error('值不能为空')
      return
    }

    if (
      category[currentCategory].title === inputRef.current.value &&
      category[currentCategory].color === categoryColor
    ) {
      setCurrentCategory(-1)
      return
    }

    const newCategoryList = category.map((category, i) => {
      let newCategory = {}

      if (currentCategory === i) {
        newCategory = { title: categoryTitle, color: categoryColor }
      } else {
        newCategory = { title: category.title, color: category.color }
      }
      return newCategory
    })

    dispatch(categoryListChange([...newCategoryList]))

    //假如框内已经展示了标签然后进行修改要对上面展示的标签做更新处理
    const sc = selectedCategory.find((c) => c.id === currentCategory)
    if (sc) {
      sc.title = inputRef.current.value
      sc.color = categoryColor
    }
    setCurrentCategory(-1)
  }

  //日期内容发生改变
  function dateInputHandle(type) {
    if (type === 'start') {
      //判断输入的日期是否在当前时间之后
      const correct = dayjs(startDateInputRef.current.value).isAfter(dayjs())

      setStartDateCorrect(correct)

      if (correct) {
        const flag = eventDateItExist(startDateInputRef.current.value)

        setisExist(flag)

        if (!flag) setstartDate(startDateInputRef.current.value)
      }
    } else {
      const correct = dayjs(endDateInputRef.current.value).isAfter(
        dayjs(startDate).add(1, 'minute'),
      )
      setEndDateCorrect(correct)

      if (correct) {
        const flag = eventDateItExist(endDateInputRef.current.value)

        setEndIsExist(flag)

        if (!flag) setEndDate(endDateInputRef.current.value)
      } else {
        setEndDate('')
      }
    }
  }

  //判断当前时间时间是否已经存在了别的事件
  function eventDateItExist(date) {
    let flag = false

    if (!eventList.length > 0) {
      return flag
    }

    eventList.forEach((e) => {
      flag =
        dayjs(date).isSameOrAfter(e.startDate) &&
        dayjs(date).isSameOrBefore(e.endDate)
    })

    return flag
  }

  //Submit事件
  function submitHandle() {
    //标题非空判断
    if (titleInputRef.current.value === '') {
      setTitleCorrect(false)
      return
    }

    //事件类型
    //起始日期非空判断
    if (!startDate) {
      setStartDateCorrect(false)
      return
    } else {
      const correct = dayjs(startDateInputRef.current.value).isAfter(dayjs())

      setStartDateCorrect(correct)

      if (!correct || isExist) {
        return
      }
    }

    if (!endDate) {
      setEndDateCorrect(false)
    } else {
      const correct = dayjs(endDateInputRef.current.value).isAfter(
        dayjs().add(1, 'minute'),
      )

      setEndDateCorrect(correct)

      if (!correct) {
        return
      }
    }

    //汇总数据
    const event = {
      //标题
      title,
      //描述
      describe,
      //事件卡片颜色
      cardColor: color[currentColor],
      //事件类型
      categorys: selectedCategory,
      startDate,
      endDate,
    }

    dispatch(eventListChange([...eventList, event]))

    //返回首页
    navigate('/')
  }

  return (
    <EventWrapper
      onClick={(e) => {
        categoryShowHandle(e, false)
      }}
    >
      <div className="event-from-container">
        <div className="title-text">
          <h2 style={{ marginBottom: '0.5rem' }}>Create new Event</h2>
          <span>Create your schedule now...</span>
        </div>
        <div className="event-title">
          <h4>Title</h4>

          <div className="input-container">
            <input
              type="text"
              placeholder="Enter event name..."
              value={title}
              onChange={(e) => titleInputHandle()}
              ref={titleInputRef}
            />

            {!titleCorrect && (
              <p className="error-text">Title cannot be empty...</p>
            )}
          </div>
        </div>
        <div className="description-title">
          <h4>Description</h4>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter description..."
              value={describe}
              onChange={(e) => setDescribe(e.target.value)}
            />
          </div>
        </div>
        <div className="label-colour">
          <h3>Label-Colour</h3>
          <div className="color-item">
            {color.map((c, index) => {
              return (
                <div
                  className="item"
                  style={{
                    backgroundColor: c,
                    boxShadow: `0px 0px 10px 0px ${
                      index === currentColor ? c : ''
                    }`,
                  }}
                  onClick={(e) => colorItemHandle(index)}
                  key={c}
                >
                  {index === currentColor && <GrCheckmark></GrCheckmark>}
                </div>
              )
            })}
          </div>
        </div>
        <div className="category">
          <h4>Select category</h4>
          <div
            className="category-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              id="category"
              onClick={(e) => {
                categoryShowHandle(e, true)
              }}
            >
              {selectedCategory.map((category, index) => {
                return (
                  <span
                    key={category.title}
                    className="selected-item"
                    style={{ backgroundColor: `${category.color}` }}
                    onClick={(e) => {
                      selectedItemClick(e, index)
                    }}
                  >
                    {index === currentSelectedCategory && (
                      <RxCrossCircled
                        className="cross"
                        onClick={(e) => selectedItemDelete(e, index)}
                      ></RxCrossCircled>
                    )}
                    {category.title}
                  </span>
                )
              })}
            </div>
            {!categoryShow && (
              <label
                htmlFor="category"
                className="category-label"
                onClick={(e) => {
                  categoryShowHandle(e, true)
                }}
              >
                <IoIosArrowDown className="down"></IoIosArrowDown>
              </label>
            )}
            {categoryShow && (
              <label
                htmlFor="category"
                className="category-label"
                onClick={(e) => {
                  categoryShowHandle(e, false)
                }}
              >
                <IoIosArrowUp className="up"></IoIosArrowUp>
              </label>
            )}

            {categoryShow && (
              <div
                className="category-list"
                onClick={(e) => inputBlurHandle(e)}
              >
                <div className="item-container">
                  {!category && (
                    <div>
                      There is currently no calendar type available, please add
                      one first...
                    </div>
                  )}

                  {category &&
                    category.map((category, index) => {
                      if (currentCategory === index) {
                        return (
                          <div
                            key={category.title}
                            className="category-item-input"
                          >
                            <input
                              value={categoryTitle}
                              className="input-title"
                              onChange={(e) =>
                                categoryItemInputHandle(e, 'title')
                              }
                              ref={inputRef}
                              autoFocus
                              //单击事件阻止冒泡 防止触发父元素的单击事件
                              onClick={(e) => e.stopPropagation()}
                            ></input>

                            <input
                              type="color"
                              className="input-color"
                              value={categoryColor}
                              onChange={(e) => {
                                categoryItemInputHandle(e, 'color')
                              }}
                              //单击事件阻止冒泡 防止触发父元素的单击事件
                              onClick={(e) => e.stopPropagation()}
                              // style={{ backgroundColor: `${category.color}` }}
                            ></input>
                          </div>
                        )
                      } else {
                        return (
                          <span
                            style={{ backgroundColor: `${category.color}` }}
                            className="category-item"
                            key={category.title + index}
                            onDoubleClick={(e) => categoryItemHandle(e, index)}
                            //单击事件阻止冒泡 防止触发父元素的单击事件
                            onClick={(e) => {
                              categoryItemClickHandle(e, index)
                            }}
                          >
                            {category.title}
                          </span>
                        )
                      }
                    })}
                </div>
                <div className="btn-container">
                  <button className="add" onClick={(e) => addCategoryHandle(e)}>
                    add category
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="event-date">
          <div className="start-date">
            <h4>Start Date</h4>
            <div className="input-container">
              <input
                type="datetime-local"
                min={dayjs().format('YYYY-MM-DDTHH:mm')}
                ref={startDateInputRef}
                onChange={(e) => {
                  dateInputHandle('start')
                }}
                value={startDate}
              />
              {!startDateCorrect && (
                <p className="error-text">
                  Date format error, should be after the current time...
                </p>
              )}

              {isExist && (
                <p className="error-text">
                  There have already been other events at this time...
                </p>
              )}
            </div>
          </div>
          <div className="end-date">
            <h4>End Date</h4>
            <div className="input-container">
              <input
                type="datetime-local"
                min={dayjs(startDate)
                  .add(1, 'minute')
                  .format('YYYY-MM-DDTHH:mm')}
                ref={endDateInputRef}
                value={endDate}
                onChange={(e) => {
                  dateInputHandle()
                }}
              />

              {!endDateCorrect && (
                <p className="error-text">
                  The minimum time should be one minute more than the current
                  time...
                </p>
              )}

              {endIsExist && (
                <p className="error-text">
                  There have already been other events at this time...
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="submit-container">
          <button className="submit" onClick={(e) => submitHandle()}>
            Submit
          </button>
        </div>
      </div>
    </EventWrapper>
  )
})

export default CreateEvent
