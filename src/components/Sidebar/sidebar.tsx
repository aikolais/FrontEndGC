import * as React from 'react';
import { Nav, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';

import { initializeIcons } from "@fluentui/react";


initializeIcons();

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: 700,
    boxSizing: 'border-box',
    border: '1px solid black',
    overflowY: 'auto',
  },
  link: {
    whiteSpace: 'normal',
    lineHeight: 'inherit',
  },
};


const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'Workspaces',
        url: 'http://example.com',
        icon: 'ProductVariant',
        key: 'key3',
        target: '_blank',
        title: '',
      },
      {
        name: 'Usuários',
        url: 'http://msn.com',
        icon: 'Contact',
        key: 'key4',
        target: '_blank',
        title: '',
      },
      {
        name: 'Configurações',
        url: 'http://cnn.com',
        icon: 'ConfigurationSolid',
        key: 'key7',
        target: '_blank',
        title: '',
      },
        {
        name: '',
        url: 'xxxx',
        icon: 'DoubleChevronLeftMedMirrored',
        key: 'key9',
      },
    ],
  },
];

const SideBar = (props: any) => {
  return (
    <Nav styles={navStyles} groups={navLinkGroups} />
  );
};

export default SideBar;