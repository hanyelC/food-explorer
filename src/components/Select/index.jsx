import { useState } from 'react'
import { CaretDown } from '../Icons/CaretDown'

import { Container, Option, Options, SelectedOption } from './styles'

export function Select({ options, placeholder, onChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(0)

  const selectedOption = options.find(({ value }) => value === selectedValue)

  const handleToggleIsOpen = () => {
    setIsOpen((state) => !state)
  }

  const changeSelectedValue = (value) => {
    setSelectedValue(value)
    onChange && onChange(value)
  }

  const handleKeyDownOnOption = ({ event, value }) => {
    const ENTER_KEY_CODE = 13
    const SPACE_KEY_CODE = 32
    if (event.keyCode === ENTER_KEY_CODE || event.keyCode === SPACE_KEY_CODE) {
      changeSelectedValue(value)
      setIsOpen(false)
    }
  }

  return (
    <Container isOpen={isOpen}>
      <SelectedOption>{selectedOption?.label ?? placeholder}</SelectedOption>

      <button type="button" onClick={handleToggleIsOpen}>
        <CaretDown />
      </button>

      <Options isOpen={isOpen}>
        {isOpen &&
          options.map(({ value, label }) => (
            <Option
              key={String(value)}
              isSelected={selectedValue === value}
              tabIndex={0}
              onClick={() => changeSelectedValue(value)}
              onKeyDown={(event) => handleKeyDownOnOption({ event, value })}
            >
              {label}
            </Option>
          ))}
      </Options>
    </Container>
  )
}
