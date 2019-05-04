import { Injectable } from '@angular/core';
// key that is used to access the data in local storageconst 

@Injectable(({
   providedIn: 'root'  // <- ADD THIS
 }))
export class StorageService {
      storage: any;

     constructor() { 
        this.storage = localStorage;
     }
  
     public set(STORAGE_KEY: string, data: string): void {          
          this.storage.setItem(STORAGE_KEY, data);
     }
     public get(STORAGE_KEY: string){
         return this.storage.getItem(STORAGE_KEY);
     }
     public delete(STORAGE_KEY: string, ){
        this.storage.removeItem(STORAGE_KEY);
     }
     public clearAll(){
        this.storage.clear();
     }
}