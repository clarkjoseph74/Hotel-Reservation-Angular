import { Injectable } from '@angular/core';
import { ApiRepositoryService } from './api-repository.service';
import { IReview, IReviewResponse } from '../Models/i-review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private apiService: ApiRepositoryService<IReviewResponse>) {}

  getRoomReviews(roomId: number): Observable<IReviewResponse> {
    return this.apiService.getById('Review', roomId);
  }
}
