import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { LoadingService } from 'src/app/components/loading/loading.service';
import { LcdMessage } from 'src/app/services/models/lcd-message';
import { RaspberryPiService } from 'src/app/services/raspberry-pi.service';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  messageForm: FormGroup;
  consoleMessageForm: FormGroup;

  lcdMessage: LcdMessage;

  constructor(private fb: FormBuilder,
              private raspberryPiService: RaspberryPiService,
              private alertService: AlertService,
              private loadingService: LoadingService) {
    this.messageForm = fb.group({
      message: ['', Validators.required]
    });

    this.consoleMessageForm = fb.group({
      consoleMessage: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }


  sendMessage(){
     // form is only partial (not all the fields)
    // We must save the whole PurchaseOrder or the fields not present in the partial will cause them to be saved blank
    const formLcdMessage: Partial<LcdMessage> = this.messageForm.value;
    this.lcdMessage = Object.assign(this.lcdMessage, formLcdMessage);

    this.loadingService
    .showLoaderUntilCompleted(this.raspberryPiService.sendLcdMessage(this.lcdMessage))
    .pipe(
      filter((val) => !!val),
      tap((result) => {
        this.loadLcdMessageToEdit(result);
        this.alertService.showSuccessMessage('Purchase Order Created');
      })
    )
    .subscribe(() => {
      // this.routeStackService.navigateToPreviousRouteOrDefault('/accounting/purchaseorders');
    });
  }

  loadLcdMessageToEdit(lcdMessage: LcdMessage){
    this.lcdMessage = lcdMessage;
  }

  sendConsoleMessage(){

  }

  toggleLed(){

  }
}
