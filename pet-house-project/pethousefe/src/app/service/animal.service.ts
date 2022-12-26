import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../model/Animal';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${this.apiServerUrl}/animal/all`);
  }
  public getAnimal(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiServerUrl}/animal/find/` + id);
  }
  public saveAnimal(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(`${this.apiServerUrl}/animal/save`, animal);
  }
  public updateAnimal(animal: Animal): Observable<Animal> {
    return this.http.put<Animal>(`${this.apiServerUrl}/animal/update`, animal);
  }
  public deleteAnimal(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/animal/delete/${id}`);
  }
}
