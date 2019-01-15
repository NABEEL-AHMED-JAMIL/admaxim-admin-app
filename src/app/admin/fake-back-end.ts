import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, materialize, dematerialize } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FakeBackendInterceptor implements HttpInterceptor {

    constructor() { }


/////////////////////////////

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // array in local storage for registered users
    let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
     
            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                console.log("get hitting");
               {
                    return of(new HttpResponse({ status: 200, body: users }));
                }
            }
    // wrap in delayed observable to simulate server api call
    return of(null).pipe(mergeMap(() => {

        // register user
        if (request.url.endsWith('/items') && request.method === 'POST') {
            // get new user object from post body
            let newUser = request.body;

            // save new user
        
            newUser.id = users.length + 1; 
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
        
            // respond 200 OK
            return of(new HttpResponse({ status: 200 }));
        }
       
      // delete user
      if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
        // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
       console.log("running del Hit");
        
            // find user by id in users array
            let urlParts = request.url.split('/');
            let id = parseInt(urlParts[urlParts.length - 1]);
            for (let i = 0; i < users.length; i++) {
                let user = users[i];
                if (user.id === id) {
                    // delete user
                    users.splice(i, 1);
                    localStorage.setItem('users', JSON.stringify(users));
                    break;
                }
            }

            // respond 200 OK
            return of(new HttpResponse({ status: 200 }));
         
    }
        
    }))

   











}
//////////////////////

}
export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};