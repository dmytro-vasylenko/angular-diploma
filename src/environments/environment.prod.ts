import IEnvironment from './environment.interface';

import baseEnvironmentConfiguration from './environment.base';

export const environment: IEnvironment = {
  ...baseEnvironmentConfiguration,

  production: true,

  baseUrl: '',
};
