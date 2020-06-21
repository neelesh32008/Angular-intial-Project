import { HttpClient } from "@angular/common/http";
import { IdElement } from "../models/id-element";

export abstract class BaseCrud<T extends IdElement> {
  constructor(protected httpClient: HttpClient, protected baseApi: string) {}

  getList() {
    return this.httpClient.get<T[]>(`${this.baseApi}`);
  }

  add(item: T) {
    return this.httpClient.post<T>(`${this.baseApi}`, item);
  }

  update(item: T) {
    return this.httpClient.patch<T>(`${this.baseApi}/${item.id}`, item);
  }

  remove(item: T) {
    return this.httpClient.delete<T>(`${this.baseApi}/${item.id}`);
  }
}
