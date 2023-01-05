import { Agence } from "./agence.model";
import { ImageVs } from "./image-vs.model";
import { TypeVehicule } from "./type-vehicule.model";

export interface Car {
        id?:number;
        name?:string;
        marque?:string;
        model?: string;
        nbrPassager?: number;
        nbrBagages?: number;
        nbrDoor?: number;
        transmission?: boolean;
        clim?: boolean;
        agenceName?: Agence[];
        type?: TypeVehicule[];
        imageVs?: ImageVs[];
        price?: number;

}
