import React, { memo, useState, useEffect, useRef } from 'react'

import EventWrapper from './style'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { categoryListChange } from '@/store/modules/event'

import { GrCheckmark } from 'react-icons/gr'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'

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

  const { categoryList } = useSelector(
    (state) => ({
      categoryList: state.event.categoryList,
    }),
    shallowEqual,
  )

  //缓存中categoryList发生变法 页面category需重新赋值并加载页面
  useEffect(() => {
    setCategory(categoryList)
  }, [categoryList])

  const dispatch = useDispatch()

  const [category, setCategory] = useState(categoryList)

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

  //span单击事件 将点击的类型标签添加至容器内展示
  function categoryItemClickHandle(e, index) {
    e.stopPropagation()
    console.log(index)
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

  //span双击事件 to input
  function categoryItemHandle(index) {
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

    setCurrentCategory(-1)
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
            <input type="text" placeholder="Enter event name..." />
          </div>
        </div>
        <div className="Description-title">
          <h4>Description</h4>
          <div className="input-container">
            <input type="text" placeholder="Enter description..." />
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
              type="text"
              id="category"
              onClick={(e) => {
                categoryShowHandle(e, true)
              }}
            >
              {selectedCategory.map((category) => {
                return (
                  <span
                    key={category.title}
                    className="selected-item"
                    style={{ backgroundColor: `${category.color}` }}
                  >
                    {category.title}
                  </span>
                )
              })}
            </div>
            {!categoryShow && (
              <label
                htmlFor="category"
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
                              // onBlur={(e) => inputBlurHandle(e, index)}
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
                            onDoubleClick={(e) => categoryItemHandle(index)}
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
      </div>
    </EventWrapper>
  )
})

export default CreateEvent
