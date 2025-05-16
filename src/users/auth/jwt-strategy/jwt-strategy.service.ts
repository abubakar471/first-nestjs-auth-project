import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstant } from '../../../constants/jwt.constant';
import { UsersService } from '../../../users/users.service';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {
    constructor(
        private userService : UsersService
    ){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration : false,
            secretOrKey : jwtConstant.secret
        })
    }

    async validate(payload: any) {
        // find the user based on _id from the payload._id
        const isValidated = await this.userService.validateUserById(payload._id);

        if(isValidated){
            return {
                email : payload.email,
                _id : payload._id
            }
        } else{
            throw new UnauthorizedException(`UNAUTHORIZED`);
        }
    }
}
