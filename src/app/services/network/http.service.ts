import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';
import { SnackbarService } from '../snackbar/snackbar.service';
import { ApiResponse } from '../../models/network/ApiResponse';
import { HtppPost } from '../../models/network/HttpPost';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private sbService: SnackbarService
  ) { }

  private onHttpSuccess(res: ApiResponse, showSnackBar: boolean, showSnackBarOnError: boolean) {
    if (showSnackBar && res.showSuccesSnackBar) {
      this.sbService.openSnack(res.data)
    }

    if (showSnackBarOnError && res.showErrorSnackbar) {
      this.sbService.openSnack(res.description)
    }
  }

  httpGet(url: string, params: any = null, showSnackBar = false, showSnackBarOnError = true) {
    return this.http.get(
      url,
      {
        params: params
      }
    ).pipe(
      map((res: any) => new ApiResponse(res)),
      tap((res: ApiResponse) => {
        this.onHttpSuccess(res, showSnackBar, showSnackBarOnError)
        return res
      }),
      catchError(this.handleError)
    )
  }

  httpPost({ url, params = null, body = null, showSnackBar = false, showSnackBarOnError = true }: HtppPost) {
    return this.http.post(
      url,
      body,
      {
        params: params,
      }
    ).pipe(
      map((res: any) => new ApiResponse(res)),
      tap((res: ApiResponse) => {
        this.onHttpSuccess(res, showSnackBar, showSnackBarOnError)
        return res
      }),
      catchError(this.handleError)
    )
  }

  private handleCustomError(res: any) {

    if (res && res.description) {
      return res.description
    }

    return null

  }

  httpGetFile({ url, params = null, body = null, showSnackBar = false, showSnackBarOnError = true }: HtppPost) {

    const options = {
      params,
      observe: 'response' as 'response',
      responseType: 'blob' as 'blob',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return this.http.post(
      url,
      body,
      options,
    ).pipe(
      map((res: any) => res),
      tap((res: any) => {
        this.onHttpSuccess(res, showSnackBar, showSnackBarOnError)
        return res
      }),
      catchError(this.handleError)
    )
  }

  private handleError = (error: HttpErrorResponse) => {
    let errorMessage = ''
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
      errorMessage = "Network Error"
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.

      //Access custom error from which is sent from backend
      errorMessage = this.handleCustomError(error.error)

      if (!errorMessage) {
        errorMessage = `Something went wrong, Error code : ${error.status}`
      }

    }

    if (!errorMessage) {
      errorMessage = 'Something went wrong; Please try again later.'
    }

    this.sbService.openSnack(errorMessage)

    // Return an observable with a user-facing error message.
    return throwError(() => new Error(errorMessage));
  }
}
