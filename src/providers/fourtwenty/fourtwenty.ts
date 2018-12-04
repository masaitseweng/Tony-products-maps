import { Http,Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class FourtwentyProvider {


  //declared variables
  private  static base_url:string= "http://420api.rcmdash.co.za/";

  token:any ;

  respond:any

  
  constructor(public http: Http) {

  //local storage
    this.token=localStorage.getItem("token");
    console.log("token",this.token)

  }

  //login api
  postsignin(login){
    
    var res = this.http.post(FourtwentyProvider.base_url+"/api/auth/signin",login).map(res => res.json())
    return res
    
  }

      

  //category api
  getCategories(token){

    const headers = new Headers();

    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Bearer ' + token)

    var res =  this.http.get(FourtwentyProvider.base_url+"/api/data/categories",{headers}).map(res => res.json())
      
      this.respond = res
      return  res
  }


  getnewsletter(token){

    //headers 
    const headers = new Headers()
    headers.append('Content-Type','application/x-www-form-urlencoded')
    headers.append('Authorization', 'Bearer ' + token)

    var res = this.http.get(FourtwentyProvider.base_url+"/api/data/posts",{headers}).map(res =>res.json())
    return res
  }


 //product api
  getproduct(url,token){

    const headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Authorization', 'Bearer ' + token)
      console.log('token',token)
    
     var res = this.http.get(url,{headers}).map(res => res.json())
     return res
  }

  postorder(prodcut){

    const headers = new Headers()
    headers.append('Content-Type','application/json')
    headers.append('Authorization', 'Bearer ' + this.token)

    var res = this.http.post(FourtwentyProvider.base_url+"/api/order/create",prodcut,{headers}) 
    return res
    
  }

  
}
