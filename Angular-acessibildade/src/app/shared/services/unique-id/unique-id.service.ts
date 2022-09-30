import { Injectable } from "@angular/core";
import * as uuid from 'uuid';

@Injectable({ providedIn:'root'})
export class UniqueIdService {

 public generateUniqueIdWithPrefix(prefix: string): string { 
  const UniqueId = this.generateUniqueId();
  return `${prefix}=${UniqueId}`;
 }   

private generateUniqueId(): string {
 return uuid.v1();    
}
}
