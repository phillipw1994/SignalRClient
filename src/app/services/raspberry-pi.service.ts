import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LcdMessage } from './models/lcd-message';

@Injectable({
  providedIn: 'root'
})
export class RaspberryPiService {

  constructor(private httpClient: HttpClient) { }

  sendLcdMessage(lcdMessage: LcdMessage): Observable<LcdMessage> {
    return this.httpClient.post<LcdMessage>(`localhost:44397/api/raspberrypi/lcd`, lcdMessage)
    .pipe(
      tap(),
      shareReplay()
    );
  }
}
