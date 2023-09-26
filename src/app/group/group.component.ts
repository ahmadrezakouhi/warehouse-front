import { Component, OnInit } from '@angular/core';
import { IGroup } from './group';
import { GroupService } from './group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit{
  groups:IGroup[]=[];
  name:string = '';
  constructor(private groupService:GroupService){

  }
  ngOnInit(): void {
    this.groupService.getAllUnits().subscribe({
      next: groups => this.groups = groups
    }
    )
  }
}
