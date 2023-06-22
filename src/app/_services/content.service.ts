import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private extractedContentSubjects: { [key: string]: Subject<string> } = {};

  updateExtractedContent(content: string, destinationId: string) {
    if (!this.extractedContentSubjects[destinationId]) {
      this.extractedContentSubjects[destinationId] = new Subject<string>();
    }
    this.extractedContentSubjects[destinationId].next(content);
  }

  getExtractedContentObservable(destinationId: string): Observable<string> {
    if (!this.extractedContentSubjects[destinationId]) {
      this.extractedContentSubjects[destinationId] = new Subject<string>();
    }
    return this.extractedContentSubjects[destinationId].asObservable();
  }
}
