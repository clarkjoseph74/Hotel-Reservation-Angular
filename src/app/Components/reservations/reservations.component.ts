import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ReservationService } from '../../Services/reservation.service';
import { IReservation } from '../../Models/i-reservation';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css',
})
export class ReservationsComponent {
  reservationList: IReservation[] = [];
  displayedColumns: string[] = [
    'id',
    'roomId',
    'totalCost',
    'guestsNum',
    'checkInDate',
    'checkOutDate',
    'isPaid',
  ];
  dataSource = new MatTableDataSource<IReservation>([]);
  isLoading = new BehaviorSubject<Boolean>(false);
  loadingStatus: Boolean = false;
  constructor(private reservationsService: ReservationService) {
    this.isLoading.next(true);
    reservationsService.getReservations().subscribe((reservations) => {
      this.dataSource = new MatTableDataSource<IReservation>(reservations);
      console.log(this.dataSource.sort);
      this.isLoading.next(false);
    });
    this.isLoadingStatus();
  }

  isLoadingStatus() {
    this.isLoading.subscribe((isLoading) => (this.loadingStatus = isLoading));
  }
}
