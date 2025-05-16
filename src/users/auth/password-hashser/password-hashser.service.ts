import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";

@Injectable()
export class PasswordHashserService {
  async hashPassword(password: string) : Promise<string>{
    return await bcrypt.hash(password, 10);
  }

  async comparePassword(plainText : string, encryptedPassword : string) : Promise<boolean>{ 
    return await bcrypt.compare(plainText, encryptedPassword);
  }
}
