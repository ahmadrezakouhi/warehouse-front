import { Component, OnInit } from '@angular/core';
import { Group, IGroup } from './group';
import { GroupService } from './group.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit{
  groups:IGroup[]=[];
  group:Group = new Group();
  constructor(private groupService:GroupService ,
    private notification:ToastrService
    ){

  }
  ngOnInit(): void {
    this.getGroups();
  }

  getGroups(){
    this.groupService.getAllGroups().subscribe({
      next: groups => this.groups = groups
    }
    )
  }

  createGroup(){
    this.groupService.createGroup(this.group).subscribe({
      next: ()=>{
        this.getGroups();
        this.notification.success('گروه کالا ایجاد شد');
      }

    })
  }
}
