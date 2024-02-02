export interface ApiResponse<T> {
    data: T;
    next: string | null;
    prev: string | null;
    count: number; 
    resultCount: number; 
  }
  