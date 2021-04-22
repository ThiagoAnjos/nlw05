import { response } from "express";
import { getCustomRepository, Repository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository"
import { User } from "../entities/User"

class UserService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
  }

  async create(email: string) {
    
    //Verificar se o usuário existe
    const userExists = await this.userRepository.findOne({
      email
    });  
    //Se existir, retornar o ID
    if (userExists) {
      return userExists;      
    }

    //Caso não exista, salvar
    const user = this.userRepository.create({
      email
    });
    await this.userRepository.save(user);
    return user;

  }
}

export { UserService };