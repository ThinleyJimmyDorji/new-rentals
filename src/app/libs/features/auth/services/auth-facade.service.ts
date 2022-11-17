import { Injectable } from '@angular/core';
import {BaseFacadeService} from "../../../shared/services/base-facade.service";
import {AuthStateService} from "./auth-state.service";
import {AuthStoreState} from "../models/auth.state";

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService extends BaseFacadeService<AuthStateService, AuthStoreState>{

  constructor(private authStateService: AuthStateService) {
    super(authStateService);
  }
}
