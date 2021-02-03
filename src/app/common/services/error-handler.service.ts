import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  private readonly actionMessage = "Close";
  private readonly defaultMessageDuration = 2000;

  constructor(
    private snackBar: MatSnackBar
  ) { }

  public buildErrorHandler(msg: string): (error: Error) => void {
    return (error: Error) => {
      console.group("Error")
      console.log(msg);
      console.log(error);
      console.groupEnd();

      this.displaySnackBar(msg);
    };
  }

  private displaySnackBar(msg: string) {
    this.snackBar.open(msg, this.actionMessage, { duration: this.defaultMessageDuration })
  }
}
