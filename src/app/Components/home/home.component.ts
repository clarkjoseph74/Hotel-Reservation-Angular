import { Component, OnDestroy } from '@angular/core';
import { ApiRepositoryService } from '../../Services/api-repository.service';
import { RoomService } from '../../Services/room.service';
import { IRoom } from '../../Models/i-room';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnDestroy {
  rooms: IRoom[] = [];
  subscribe: Subscription;
  constructor(private roomServices: RoomService) {
    this.subscribe = roomServices
      .getRooms()
      .subscribe((data) => (this.rooms = data));
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
