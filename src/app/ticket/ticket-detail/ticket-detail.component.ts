import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from 'src/app/shared/ticket.service';
import { Ticket } from 'src/app/shared/ticket.model';
import { ToastrService } from 'ngx-toastr';
import { Comment } from "src/app/shared/comment.model";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styles: [
  ]
})
export class TicketDetailComponent implements OnInit {
  form:NgForm;
  Id:any;
  ticket:any;


  constructor(public service:TicketService,
    private toastr:ToastrService,
    private router:Router,
    public actRoute:ActivatedRoute,
    private http:HttpClient) { }

  commentList: Comment[];
  comment: Comment= new Comment();
 
  ngOnInit(): void {
    // this.refreshCommentList();
    this.Id=this.actRoute.snapshot.paramMap.get("id");
    this.loadTicketDetails();
  }
  loadTicketDetails(){
    this.service.getTicketDetail(this.Id).subscribe(tkt =>
      {
        this.ticket=tkt;
        this.service.formData.ticketId=this.ticket.ticketId;
        this.refreshCommentList();
      })
  }
  formSubmit(form:NgForm)
  {
      this.comment.ticketId=this.ticket.ticketId;
      this.postComment().subscribe(res=>
        {
          this.refreshCommentList();
          this.toastr.success("Comment added succesfully","Add Comment");
        },
        err=>{
          console.log('comment not added');
          
          
        });
      this.resetForm(form);

  }
  resetForm(form:NgForm)
  {
    form.reset();
    this.refreshCommentList();
  }
  refreshCommentList()
  {
    this.http.get(`${this.service.baseURLc}/${this.service.formData.ticketId}`)
    .toPromise()
    .then(res=> this.commentList = res as Comment[]);
  }
  postComment()
  {
    return this.http.post(this.service.baseURLc,this.comment)
  }


}
