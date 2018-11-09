// src/ui/theme/index.js

import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#42A5F5', contrastText: '#000000' },
  secondary: { main: '#ECEFF1' }
};
const themeName = 'Picton Blue Porcelain Buffalo';

export default createMuiTheme({ palette, themeName });
