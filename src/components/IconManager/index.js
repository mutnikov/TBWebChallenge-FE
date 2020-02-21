import React from 'react';

import Plus from './components/Plus';

const PlusIcon = (props) => <Plus {...props} />;

const ICONS = {
  plus: PlusIcon,

};

const IconManager = ({ name, ...props }) => {
  if (!ICONS[name]) {
    return null;
  }
  return ICONS[name](props);
};

export default IconManager;
