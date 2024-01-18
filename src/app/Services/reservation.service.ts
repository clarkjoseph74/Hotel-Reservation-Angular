import { Injectable } from '@angular/core';
import { ApiRepositoryService } from './api-repository.service';
import { IReservation } from '../Models/i-reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private apiService: ApiRepositoryService<IReservation>) {}

  getReservations() {
    return this.apiService.getAll('Reservations');
  }
}
