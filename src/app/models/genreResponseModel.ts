import { Genre } from "./genre";
import { ResponseModel } from "./responseModel";

export interface GenreResponseModel extends ResponseModel{
    data:Genre[];
}