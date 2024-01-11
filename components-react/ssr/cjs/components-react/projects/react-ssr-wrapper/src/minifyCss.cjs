'use strict';

const minifyCss = (css) => css.replace(/\s\s+|\.\\(?=:)|[\n\\]+| (?={)|;(?=\s+})|(:|media)\s(?=.*;?)/g, '$1');

exports.minifyCss = minifyCss;
