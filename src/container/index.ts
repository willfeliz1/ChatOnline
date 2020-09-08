import { container } from 'tsyringe';

import IUsersRepository from '../modules/users/repositoriesInterface/IUsersRepository';
import UsersRepository from '../modules/users/repositories/UsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
