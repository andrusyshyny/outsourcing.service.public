import { Observable } from 'rxjs/Rx';

export interface IApiBaseService<TData> {
  create(list: TData[]): Observable<void>;
  update(list: TData[]): Observable<void>;
  delete(id: number): Observable<void>;
  getList(): Observable<TData[]>;
}
