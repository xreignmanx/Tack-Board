import React from 'react';
import {storiesOf} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Menu from './index';

export const menu = {
    title: 'MENU TEST',
    state: 'default',
};


export const actions = {
    onExpand: action('onExpand'),
    onDisabled: action('onArchiveMenu')
};

storiesOf('Menu', module)
    .add('default', () => <Menu menu={menu} {...actions} />)
    .add('disabled', ()=> <Menu menu={{ ...menu, state: 'MENU_DISABLED' }} {...actions} />)
    .add('opened', ()=> <Menu menu={{ ...menu, state: 'MENU_OPEN' }} {...actions} />)