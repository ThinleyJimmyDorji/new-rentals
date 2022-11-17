import {Observable} from 'rxjs';

export class BaseFacadeService<T, V> {
  currentStateService: T;

  constructor(state: T) {
    this.currentStateService = state;
  }

  // @ts-ignore
  initialize = (): void => this.currentStateService['initialState']();

  // @ts-ignore
  stateChange = (): Observable<V> => this.currentStateService['stateChanged'];

  // @ts-ignore
  updateSpecificState = <U>(data: U, stateKey: string): void => this.currentStateService['updateSpecificState']<U>(data, stateKey);

  // eslint-disable-next-line max-len
  // @ts-ignore
  specificStateChange = <U>(stateKey: string, allowFilter: boolean = true): Observable<U> => this.currentStateService['specificStateChange']<U>(stateKey, allowFilter);

  // @ts-ignore
  stateChangeWithStarter = <U>(stateKey: string, allowFilter = true): Observable<U> => this.currentStateService['stateChangesWithStarter']<U>(stateKey, allowFilter);

  // @ts-ignore
  specificGlobalStateChange = <U>(stateKey: string): Observable<U> => this.currentStateService['specificGlobalStateChange']<U>(stateKey);

  // @ts-ignore
  getSpecificState = <U>(state?: string): U => state ? this.currentStateService['getStateProperty'](state) : this.currentStateService['getSpecificState']();
}
