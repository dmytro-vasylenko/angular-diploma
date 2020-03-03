import IEnvironment from './environment.interface';

import baseConfiguration from './environment.base';

export const environment: IEnvironment = {
  ...baseConfiguration,

  production: false,

  baseUrl: 'http://localhost:8080',
};
