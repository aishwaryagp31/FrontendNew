import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TicketService } from '../shared/ticket.service';
import { NgForm } from "@angular/forms";
import { Ticket } from "../shared/ticket.model";


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styles: [
  ]
})
export class TicketComponent implements OnInit {

  
  public Id:number;
  constructor(
    public service:TicketService,
    private router:Router,
    private toastr:ToastrService,
    public actRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.service.refreshList();
    //console.log(this.service.list);
    //this.refreshCommentList();
    //console.log(this.service.commentList);
  }
  populateForm(selectedTicket:Ticket)
  {
    this.service.formData=Object.assign({},selectedTicket);
    

  }

  onDelete(Id: number)
  {
    if(confirm('Are you sure to delete the ticket?'))
    {
    this.service.deleteTicket(Id)
    .subscribe(
      res=>{
        this.service.refreshList();
        this.toastr.error("Ticket deleted","Ticket Register")
      },
      err=>{console.log(err)}
    )
    }
  }
  getDetails(Id:number)
  {
      this.router.navigate(['app-ticket-detail']);
  }

  



  
  
}



