import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AlertService {

    constructor(public toastr: ToastrService) { }

    showErrorMessage(message) {
        this.toastr.show(
          '<span class="ni ni-bell-55"></span>',
          message,
          {
            timeOut: 8000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-danger alert-with-icon",
            positionClass: "toast-top-right"
          }
        );
      }

    showSuccessMessage(message) {
        this.toastr.show(
            '<span class="ni ni-bell-55"></span>',
            message,
            {
              timeOut: 4000,
              closeButton: true,
              enableHtml: true,
              toastClass: "alert alert-success alert-with-icon",
              positionClass: "toast-top-right"
            }
          );
      }

      showSuccess(message, title){
        this.toastr.success(message, title)
    }

    showError(message, title){
        this.toastr.error(message, title)
    }

    showInfo(message, title){
        this.toastr.info(message, title)
    }

    showWarning(message, title){
        this.toastr.warning(message, title)
    }
}
