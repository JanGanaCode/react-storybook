import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

import Button from '../components/buttons/Button';

setAddon(JSXAddon);

storiesOf('Buttons', module)
  .addWithJSX('Primary', () => <Button 
    buttonLink='#'
    buttonName='Primary'
  />)
