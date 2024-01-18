import { Injectable } from '@angular/core';
import { ApiRepositoryService } from './api-repository.service';
import { IRoom } from '../Models/i-room';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private apiService: ApiRepositoryService<IRoom>) {}

  getRooms(): Observable<IRoom[]> {
    return this.apiService.getAll('Rooms');
  }
  getRoomDetails(id: number): Observable<IRoom> {
    return this.apiService.getById('Rooms', id);
  }
  addRoom(data: IRoom): Observable<IRoom> {
    return this.apiService.add('Rooms', data);
  }
}
