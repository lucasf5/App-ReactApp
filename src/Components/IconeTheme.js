import React from 'react'

import ThemeOff from "../assets/images/themeOff.svg";
import ThemeOn from "../assets/images/themeOn.svg";
import { Icone } from './UI/Icone';

const claro = <Icone src={ThemeOn} />
const escuro = <Icone src={ThemeOff} />


export default ({ theme }) => (theme ? claro : escuro);