import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

const options = [
  { key: 1, text: 'None', value: 1 },
  { key: 2, text: 'CC', value: 2 },
  { key: 3, text: 'D', value: 3 },
  { key: 3, text: 'P', value: 4 },
  { key: 3, text: 'S', value: 5 },
  { key: 3, text: 'W', value: 6 },
]

const DropdownBox = () => (
  <Dropdown selection options={options} placeholder='Choose an option' />
)

export default DropdownBox

