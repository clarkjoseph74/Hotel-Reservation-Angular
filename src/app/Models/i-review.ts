export interface IReview {
  id: number;
  roomId: number;
  rating: number;
  comment: string;
}

export interface IReviewResponse {
  reviews: IReview[];
  averageRating: number;
}
