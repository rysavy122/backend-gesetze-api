import { Injectable } from '@nestjs/common';
import { Gesetz } from './interfaces/gesetz.interface';

@Injectable()
export class GesetzeService {
    private readonly gesetze: Gesetz[] = [
           {
              id:"2068550",
              title:"BGH, 24.11.2021 - VII ZR 531/21"
           },
           {
              id:"2068940",
              title:"BGH, 13.01.2022 - III ZR 210/20"
           },
           {
              id:"1828824",
              title:"BGH, 20.11.2002 - VIII ZR 146/01 - Allianz 5 -"
           },
           {
              id:"2069668",
              title:"OLG Düsseldorf, 27.01.2022 - I-20 U 105/21"
           },
           {
              id:"2069499",
              title:"OLG München, 16.12.2021 - 23 U 1704/20"
           },
           {
              id:"2068212",
              title:"OLG Frankfurt/Main, 08.12.2021 - 4 U 251/20 - Medizinprodukte -"
           },
           {
              id:"1823691",
              title:"BGH, 17.11.1983 - I ZR 139/81 - Allianz 2 -"
           },
           {
              id:"2056223",
              title:"BGH, 05.11.2020 - VII ZR 188/19"
           },
           {
              id:"1827369",
              title:"EuGH, 07.09.2006 - C-125/05 - Vulcan Silkeborg -"
           },
           {
              id:"1828279",
              title:"EuGH, 17.01.2008 - C-19/07 - Groupe Danone -"
           },
           {
              id:"1900517",
              title:"EuGH, 21.06.2007 - C-453/05 - DVAG 19 -"
           },
           {
              id:"1850146",
              title:"EuGH, 16.03.2006 - C-3/04 - Poseidon Chartering -"
           },
           {
              id:"1810198",
              title:"EuGH, 23.03.2006 - C-465/04 - Honyvem Informazioni Commerciali -"
           },
        ];

        findAll(): Gesetz[] {
            return this.gesetze;
        }
        findOne(id: string): Gesetz {
            return this.gesetze.find(gesetz => gesetz.id === id);
        }
}
