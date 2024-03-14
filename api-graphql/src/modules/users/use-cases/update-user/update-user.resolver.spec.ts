import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { UpdateUserResolver } from './update-user.resolver';
import { UpdateUserDto } from './update-user.dto';
import Users from 'src/database/mongodb/schemas/user.schema';

interface User {
  id: string;
  name: string;
  date: Date;
  idade: number;
}

describe('UpdateUserResolver', () => {
  let resolver: UpdateUserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateUserResolver,
        {
          provide: getModelToken('User'), // Correção aqui: deve ser 'User' em vez de 'UpdateUserDto'
          useValue: Users,
        },
      ],
    }).compile();

    resolver = module.get<UpdateUserResolver>(UpdateUserResolver);

    jest.clearAllMocks();
  });

  test('should update user', async () => {
    // Suponha que você tenha um usuário existente no banco de dados
    const existingUser: User = {
      id: '1',
      name: 'Nome ficticio',
      date: new Date(),
      idade: 22,
      // outros campos...
    };

    const updateUserDto: UpdateUserDto = {
      id: '1',
      name: 'Nome Ficticio 2',
      // campos que você deseja atualizar...
    };

    jest.spyOn(Users, 'findById').mockResolvedValue(existingUser);

    const result = await resolver.updateUser(updateUserDto);

    // Verifique se o resolver retorna o usuário atualizado
    expect(result).toEqual(existingUser);
  });
});
