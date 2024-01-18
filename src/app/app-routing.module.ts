import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { HomeComponent } from './Components/home/home.component';
import { AddRoomComponent } from './Components/add-room/add-room.component';
import { RoomDetailsComponent } from './Components/room-details/room-details.component';
import { ReservationsComponent } from './Components/reservations/reservations.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'AddRoom', component: AddRoomComponent },
      { path: 'Room/:id', component: RoomDetailsComponent },
      { path: 'Reservations', component: ReservationsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
