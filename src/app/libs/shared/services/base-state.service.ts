import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseStateService<T> extends ObservableStore<T> {
  constructor() {
    super({ trackStateHistory: false, logStateChanges: false});
  }

  specificStateChange<U>(stateKey: string, allowFilter: boolean = true): Observable<U> {
    return this.stateWithPropertyChanges.pipe(
      // @ts-ignore
      filter(stateChange => !allowFilter || (allowFilter && !!stateChange.stateChanges[stateKey])), map(stateChange => stateChange.stateChanges[stateKey])
    );
  }

  /**
   * * Note: This is a workaround for the fact that the state change is not being emitted when the state has been set before the subscription is made.
   * * This is done because especially in perms(look at analysis base), the state is set before the subscription is made.
   * * PS: its also been made as a different function from above because startWith seems to be emitting the previous state even if set as undefined.
   */
  stateChangesWithStarter<U>(stateKey: string, allowFilter: boolean = true): Observable<U> {
    return this.stateWithPropertyChanges.pipe(
      startWith({ stateChanges: { [stateKey]: this.getSpecificState<U>(stateKey) } }),
      // @ts-ignore
      filter(stateChange => !allowFilter || (allowFilter && !!stateChange.stateChanges[stateKey])), map(stateChange => stateChange.stateChanges[stateKey])
    );
  }

  specificGlobalStateChange<U>(stateKey: string): Observable<U> {
    return this.globalStateWithPropertyChanges.pipe(
      // @ts-ignore
      filter(stateChange => stateChange.stateChanges && !!stateChange.stateChanges[stateKey]), map(stateChange => stateChange.stateChanges[stateKey])
    );
  }

  updateSpecificState<U>(data: U, stateKey: string, message?: string): T {
    return this.setState(({ [stateKey]: data } as unknown) as Partial<T>, message ? message : 'UPDATE_' + stateKey?.toUpperCase());
  }

  // @ts-ignore
  getSpecificState = <U>(state?: string): U => (state ? this.getState()[state] : this.getState());

  getProperty<U>(property: string): U {
    return this.getStateProperty(property)
  }

  // @ts-ignore
  protected getStateProperty<TProp>(propertyName: string, deepCloneReturnedState?: boolean): TProp {
    return super.getStateProperty(propertyName, deepCloneReturnedState);
  }
}

