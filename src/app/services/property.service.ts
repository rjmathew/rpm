import {Injectable, EventEmitter, Output} from '@angular/core';
import {Property} from "../property/property.model";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class PropertyService {


  propertiesUrl : string;
  constructor(public http : Http) {
    this.propertiesUrl = 'http://localhost:8080/properties';
  }

  list : Property[];

  getAll (): Observable<Property[]> {
    return this.http.get(this.propertiesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }

  private extractData(res: Response) {
    this.list = res.json();
    if (this.list==null)
      this.list=[];
    return this.list;
  }

  private extractSingleProperty(pId : string, res: Response) {
    this.list = res.json();
    for (var item of this.list) {
      if (item._id==pId)
        return item;
    }
    return {};
  }



  getPropertyById(pId: string) : Observable<Property> {
    return this.http.get(this.propertiesUrl)
      .map((res:Response) => this.extractSingleProperty(pId, res))
      .catch(this.handleError);

  }

  addProperty(model: Property) : Observable<Property> {
    return this.http.post(this.propertiesUrl,model).
      map(function(res:Response) {return res;})
      .catch(this.handleError);
  }
}
