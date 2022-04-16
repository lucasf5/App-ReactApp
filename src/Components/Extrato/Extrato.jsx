import React from 'react'
import { Box } from '../UI/Box'
import { ExtratoLista } from '../../info'
import { Btn } from '../UI/Btn'

import {Items} from '../Item/Items'
import { Item } from '../Item/Item'
import ImageFilter from '../ImageFilter'

import styled from 'styled-components'
import FontFilter from '../FontFilter'

const BoxScroll = styled(Box)`
  overflow-y: scroll;
  max-height: 400px;
`;


const Extrato = () => {
  return (
    <BoxScroll>
      {ExtratoLista.updates.map(({ id, type, from, value, date }) => (
        <Items>
          {ImageFilter(type)}
          <Item key={id}>
            {FontFilter(type)}
            <span>{from}</span>
            <span>{value}</span>
          </Item>
          <span>{date}</span>
        </Items>
      ))}
      <Btn>Ver Mais</Btn>
    </BoxScroll>
  );
}

export default Extrato