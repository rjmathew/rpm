import {Injectable, EventEmitter, Output} from '@angular/core';
import {Property} from "../property/property.model";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class PropertyService {


  propertiesUrl : string;
  constructor(public http : Http) {
    console.log('in constructor');
    this.propertiesUrl = 'http://localhost:8080/properties';
  }

  list : Property[];

  getAll (): Observable<Property[]> {
    console.log('in service');
    return this.http.get(this.propertiesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  private extractData(res: Response) {
    this.list = res.json();
    console.log('list is set');
    return this.list;
  }

  private extractSingleProperty(pId : string, res: Response) {
    this.list = res.json();
    console.log('list is set');
    for (var item of this.list) {
      if (item._id==pId)
        return item;
    }
    return {};
  }

  // getPropertyById(pId: string) : Property {
  //   console.log('pId ' + pId);
  //   console.log(this.list);
  //   for (var item of this.list) {
  //     if (item._id==pId)
  //       return item;
  //   }
  //   console.log('getPropertyById - rturn');
  // }

  getPropertyById(pId: string) : Observable<Property> {
    return this.http.get(this.propertiesUrl)
      .map((res:Response) => this.extractSingleProperty(pId, res))
      .catch(this.handleError);

  }

  addProperty(model: Property) {
    console.log('adding new prop');
    this.list.push(model);
    this.http.post('http://localhost:8080/properties',model).
    subscribe((res : Response) => {
      console.log(res.json());
    });
  }
}
