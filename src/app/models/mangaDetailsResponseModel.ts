import { MangaDetails } from "./mangaDetails";
import { ResponseModel } from "./responseModel";

export interface MangaDetailsResponseModel extends ResponseModel{
    data:MangaDetails[];
}