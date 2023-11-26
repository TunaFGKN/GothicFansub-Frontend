import { Manga } from "./manga";
import { ResponseModel } from "./responseModel";

export interface MangaResponseModel extends ResponseModel{
    data:Manga[]
}