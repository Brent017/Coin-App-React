import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

const options = [
  { key: 1, text: 'None', value: '' },
  { key: 2, text: 'CC', value: 'CC' },
  { key: 3, text: 'D', value: 'D' },
  { key: 3, text: 'P', value: 'P' },
  { key: 3, text: 'S', value: 'S' },
  { key: 3, text: 'W', value: 'W' },
]

const DropdownBox = () => (
  <Dropdown selection options={options} placeholder='Choose an option' />
)

export default DropdownBox

