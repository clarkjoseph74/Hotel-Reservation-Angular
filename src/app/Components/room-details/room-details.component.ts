import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../../Services/room.service';
import { IRoom } from '../../Models/i-room';
import { IReview, IReviewResponse } from '../../Models/i-review';
import { ReviewService } from '../../Services/review.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrl: './room-details.component.css',
})
export class RoomDetailsComponent implements OnInit, OnDestroy {
  roomId: number = 0;
  roomDetails: IRoom | null = null;
  averageRating: number = 0;
  reviews: IReview[] | null = null;
  subscribe: Subscription[] = [];
  constructor(
    private activeRoute: ActivatedRoute,
    private roomService: RoomService,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    this.roomId = Number(this.activeRoute.snapshot.paramMap.get('id'));

    this.subscribe.push(
      this.roomService
        .getRoomDetails(this.roomId)
        .subscribe((room) => (this.roomDetails = room))
    );
    this.subscribe.push(
      this.reviewService
        .getRoomReviews(this.roomId)
        .subscribe((reviewsData) => {
          this.averageRating = reviewsData.averageRating;
          this.reviews = reviewsData.reviews;
        })
    );
  }
  ngOnDestroy(): void {
    this.subscribe.forEach((element) => {
      element.unsubscribe();
    });
  }
}
