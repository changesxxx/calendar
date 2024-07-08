import React, { memo, useState } from 'react'

import EventWrapper from './style'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'

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

  //选中的标签颜色
  const [currentColor, setCurrentColor] = useState(0)
  //展示下拉选项
  const [categoryShow, setCategoryShow] = useState(false)
  //输入框内容
  const [inputValue, setInputValue] = useState('')

  //当前类型index
  const [currentCategory, setCurrentCategory] = useState(-1)

  //当前类型名称
  const [categoryTitle, setCategoryTitle] = useState()

  function colorItemHandle(index) {
    setCurrentColor(index)
  }

  function categoryShowHandle(e, flag) {
    e.stopPropagation()
    setCategoryShow(flag)

    if (!flag) {
      setInputValue('')
    }
  }

  function addCategoryHandle(e) {
    e.stopPropagation()
  }

  function categoryItemHandle(e, index) {
    console.log('categoryItemHandle', e, index)
    //修改类型标签index
    setCurrentCategory(index)
    //修改类型名称内容
    setCategoryTitle(categoryList[index].title)
  }

  function categoryItemInputHandle(e) {
    setCategoryTitle(e.target.value)
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

        <div className="category" onClick={(e) => e.stopPropagation()}>
          <h4>Select category</h4>
          <div className="category-container">
            <input
              type="text"
              id="category"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onClick={(e) => {
                categoryShowHandle(e, true)
              }}
            ></input>
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
              <div className="category-list">
                <>
                  {!categoryList && (
                    <div>
                      There is currently no calendar type available, please add
                      one first...
                    </div>
                  )}

                  {categoryList &&
                    categoryList.map((category, index) => {
                      if (currentCategory === index) {
                        return (
                          <input
                            key={category}
                            value={categoryTitle}
                            className="category-item-input"
                            onChange={(e) => categoryItemInputHandle(e)}
                          ></input>
                        )
                      } else {
                        return (
                          <span
                            style={{ backgroundColor: `${category.color}` }}
                            className="category-item"
                            key={category}
                            onDoubleClick={(e) => categoryItemHandle(e, index)}
                          >
                            {category.title}
                          </span>
                        )
                      }
                    })}
                </>
                <button className="add" onClick={(e) => addCategoryHandle(e)}>
                  add category
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </EventWrapper>
  )
})

export default CreateEvent
