import { setResolver } from 'ember-mocha';

import resolver from './helpers/resolver';
import registerSelectHelper from './helpers/register-select-helper';

registerSelectHelper();

setResolver(resolver);
