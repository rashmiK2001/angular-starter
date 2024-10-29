// Reference: To dive deeper into the concept of HTTP Interceptors , refer to https://medium.com/@jaydeepvpatil225/http-interceptors-in-angular-6e9891ae0538

import { HttpInterceptorFn } from '@angular/common/http';

export const httpRequestInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
