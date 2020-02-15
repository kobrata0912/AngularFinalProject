import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  
  constructor(private toastr: ToastrService) { }

  handleError(input: {code: string, message: string}) {
    this.toastr.error('Error', input.message, { timeOut: 5000 });
  }
  handleSuccess(message: string) {
    this.toastr.success(message);
  }
}
