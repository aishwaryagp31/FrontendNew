import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from './ticket.model';
import { Comment } from "./comment.model";


@Injectable({
  providedIn: 'root'
})
export class TicketService {
  postComment() {
    throw new Error('Method not implemented.');
  }
  comment: any;
  // refreshCommentList() {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private http:HttpClient) { }
  
  formData:Ticket =new Ticket();
  //comment: Comment= new Comment();
  list: Ticket[];
  //commentList: Comment[];
  data:any = sessionStorage.getItem("key");
  user = JSON.parse(this.data);
  userId = this.user.userId;
  
  readonly baseURLa = 'http://localhost:5000/api/Tickets';
  readonly baseURLb = 'http://localhost:5000/api/Users/specific';
  readonly baseURLc = 'http://localhost:5000/api/Comments';
  
 
  postTicket()
  {
    return this.http.post(this.baseURLa,this.formData);
  }
  getTicketDetail(Id:number)
  {
    return this.http.get(`${this.baseURLa}/${Id}`);
  }
  putTicket()
  {
    return this.http.put(`${this.baseURLa}/${this.formData.ticketId}`,this.formData);
  }
  deleteTicket(Id:number)
  {
    return this.http.delete(`${this.baseURLa}/${Id}`);
  }
  refreshList()
  {
    let userObject=sessionStorage.getItem("key");
    this.user = userObject!==null?JSON.parse(userObject):{};
    this.userId = this.user.userId;
    this.http.get(`${this.baseURLb}/${this.userId}`)
    .toPromise()
    .then(res=> this.list= res as Ticket[]);
  }
  // refreshCommentList()
  // {
  //   this.http.get(`${this.baseURLc}/${this.formData.ticketId}`)
  //   .toPromise()
  //   .then(res=> this.commentList = res as Comment[]);
  // }
  // postComment()
  // {
  //   return this.http.post(this.baseURLc,this.comment)
  // }
 
}
