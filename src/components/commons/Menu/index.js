import React from 'react';

import { Logo } from '../../../theme/Logo';

import { Button } from '../Button';

import { MenuWrapper } from './styles';

export default function Menu() {

  const links = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'Perguntas frequentes',
      url: '/faq'
    },
    {
      text: 'Sobre',
      url: '/sobre'
    },
  ];

  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>

      <MenuWrapper.CentralSide>
        {links.map((link) => {
          return (
            <li key={link.url}>
              <a href={link.url} target="_blank">{link.text}</a>
            </li>
          )
        })}
      </MenuWrapper.CentralSide>

      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main">
          Entrar
        </Button>

        <Button variant="primary.main">
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}
