import { Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root'
})
export class  LocalStorageService {

    set<T>(key: string, value: T ): void {
        localStorage.setItem(key, JSON.stringify(value) || '');
    }

    get<T>(key: string): T  {
        const item = localStorage.getItem(key);
        if (item) {
           return  JSON.parse(item);
        }
        return null;
    }

    remove(key: string): void {
        localStorage.removeItem(key);
    }
}
