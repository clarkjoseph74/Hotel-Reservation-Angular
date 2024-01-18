import { Component } from '@angular/core';
import { RoomService } from '../../Services/room.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.css',
})
export class AddRoomComponent {
  roomForm: FormGroup;

  constructor(
    private roomService: RoomService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.roomForm = formBuilder.group({
      roomType: formBuilder.control([''], [Validators.required]),
      maxOccupancy: formBuilder.control([''], [Validators.required]),
      pricePerNight: formBuilder.control([''], [Validators.required]),
    });
  }

  addRoom() {
    console.log(this.roomForm.value);

    this.roomService.addRoom(this.roomForm.value).subscribe((room) => {
      this.router.navigateByUrl('');
      console.log(room);
    });
  }
}
