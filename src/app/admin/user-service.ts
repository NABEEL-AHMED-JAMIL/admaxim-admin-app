import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{item} from '../item'
@Injectable({ providedIn: 'root' })

export class UserService{

    constructor(private http: HttpClient) { }  
    getAll() {
        return this.http.get<item[]>(`/users`);
    }

    register(user: item) { 
        return this.http.post(`/items`, user);
    } 

    delete(id: number) {
        return this.http.delete(`/users/` + id);
    }
}