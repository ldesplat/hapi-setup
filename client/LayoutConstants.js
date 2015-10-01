'use strict';

import Style from 'jsxstyle';

var primaryColor = '#009688';
var secondaryColor = '#ffc107'
var textColor = Style.alpha(Style.rgb(0, 0, 0), .87);
var tabHeight = 40;
var tabWidth = 150;

var LayoutConstants = {
  primaryColor,
  secondaryColor,
  textColor,
  tabHeight,
  tabWidth,
}

module.exports = LayoutConstants;
