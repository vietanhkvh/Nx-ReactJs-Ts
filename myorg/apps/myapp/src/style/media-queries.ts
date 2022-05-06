import * as variableStyle from './variable';

export default {
  desktop1920: `@media screen and (min-width: ${variableStyle.breakPoint1920}px)`,
  desktop1600: `@media screen and (min-width: ${variableStyle.breakPoint1600}px)`,
  desktop1440: `@media screen and (min-width: ${variableStyle.breakPoint1440}px)`,
  desktop1280: `@media screen and (min-width: ${variableStyle.breakPoint1280}px)`,
  desktop1170: `@media screen and (min-width: ${variableStyle.breakPoint1170}px)`,

  tablet1024: `@media screen and (min-width: ${variableStyle.breakPoint1024}px)`,
  tablet960: `@media screen and (min-width: ${variableStyle.breakPoint960}px)`,
  tablet960Reverse: `@media screen and (max-width: ${variableStyle.breakPoint959}px)`,
  tablet768: `@media screen and (min-width: ${variableStyle.breakPoint768}px)`,

  mobile610: `@media screen and (min-width: ${variableStyle.breakPoint610}px)`,
  mobile480: `@media screen and (min-width: ${variableStyle.breakPoint480}px)`,
  mobile320: `@media screen and (min-width: ${variableStyle.breakPoint320}px)`
};
