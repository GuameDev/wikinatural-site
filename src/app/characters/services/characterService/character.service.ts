import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { GetAllCharactersRequest } from '../../models/get-all-characters.request';
import { Observable } from 'rxjs';
import { PaginationConstants } from '../../../constants/pagination.constant';
import { Character } from '../../models/character.model';
import { ApiResponse } from '../../../models/api-response.model';


@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private httpClient: HttpClient) {}

  getAllCharacters(
    request?: GetAllCharactersRequest
  ): Observable<ApiResponse<Character[]>> {
    let queryParams: HttpParams = new HttpParams();

    if (request?.name) queryParams.append('name', request.name);

    if (request?.actor) queryParams.append('actor', request.actor);

    if (request?.occupation)
      queryParams.append('occupation', request.occupation);

    queryParams.append('page', request?.page ?? PaginationConstants.defaultPage);
    queryParams.append('page', request?.size ?? PaginationConstants.defaultSize);

    return this.httpClient.get<ApiResponse<Character[]>>(
      `${environment.baseSupernaturalApiUrl}/characters`,
      { params: queryParams }
    );
  }
}
