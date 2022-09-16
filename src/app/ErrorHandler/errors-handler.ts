import { ErrorHandler, Injectable} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  constructor() {}

  handleError(error: Error | HttpErrorResponse) {        

    if (error instanceof HttpErrorResponse) {
    // Server error happened      
      if (!navigator.onLine) {
        // No Internet connection
        alert("No Internet Connection");
      }
      // Http Error
      return alert(`${error.status} - ${error.message}`);
      
    } else {
      // Client Error Happend      
      alert("Error Message :"+error);
    }
    // Log the error anyway
    console.warn("Error Come From ErroHandler!")
    console.error(error);
  }
}

