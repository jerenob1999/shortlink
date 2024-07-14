export interface Link {
  fullUrl: string;
  shortUrl: string;
  description: string;
  clicks: number;
  lastClicked: Date | null;
  userId: number;
}
