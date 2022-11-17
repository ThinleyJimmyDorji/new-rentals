import { Injectable } from '@angular/core';
import {BaseStateService} from "../../../shared/services/base-state.service";
import {AuthStoreState} from "../models/auth.state";

@Injectable({
  providedIn: 'root'
})
export class AuthStateService extends BaseStateService<AuthStoreState>{

  constructor() {
    super();
    this.setUpInitialState();
  }

  setUpInitialState(): void {
    this.setState({});
  }
}
