import { checkYear, roundCheck } from '../lib/util';
import { F1 } from './data-source';

export class RacesData extends F1{
    constructor(){
        super();
           }

           async getYear(year: string){
            year = checkYear(year);
            return await this.get(`${year}.json`, {
                cacheOptions: { ttl: 60 } 
            });
           }


           async getYearRound(year: string, round: number){
            year = checkYear(year);
            round = roundCheck(round);
            return await this.get(`${year}/${round}.json`, {
                cacheOptions: { ttl: 60 } 
            });
           }



}

