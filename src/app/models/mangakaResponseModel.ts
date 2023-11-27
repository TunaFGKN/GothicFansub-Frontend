import { Mangaka } from "./mangaka";
import { ResponseModel } from "./responseModel";

export interface MangakaResponseModel extends ResponseModel{
    data:Mangaka[];
}