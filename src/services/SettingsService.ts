import { getCustomRepository, Repository } from "typeorm";
import { SettingRepository } from "../repositories/SettingRepository"
import { Setting } from "../entities/Setting"

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {

  private settingsRepository: Repository<Setting>;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingRepository);
  }
  
  async create({chat, username} : ISettingsCreate) {
    
    //SELECT * FROM SETTINGS WHERE USERNAME = "USERNAME" ROWNUM = 1
    const userAlreadyExists = await this.settingsRepository.findOne({
      username
    });
    
    if(userAlreadyExists) {
      throw new Error("User already exists")
    }
    
    const settings = this.settingsRepository.create({
      chat,
      username
    })
  
    await this.settingsRepository.save(settings);

    return settings;
  }

}

export { SettingsService } 