import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'ndsu-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  editing = {};
  rows = [];
  ngOnInit() {
    
  }

    isCollapsed : boolean = true;
    leaderCollapsed : boolean = true;
    employeeCollapsed : boolean = true;

  adminclicked()
  {
    this.isCollapsed = !this.isCollapsed;
    console.log('Admin Clicked');
    
  }
  leaderclicked()
  {
    this.leaderCollapsed = !this.leaderCollapsed;
    console.log('Leader Clicked');
  }

  employeeclicked()
  {
    this.employeeCollapsed = !this.employeeCollapsed;
    console.log('Employee Clicked');
  }
}

const ELEMENT_DATA: Element[] = [
  { position: 1234, name: 'John Doe', weight: 1, symbol: 'Office'},
  { position: 2234, name: 'Jane Tom', weight: 3, symbol: 'Language'},
  { position: 3234, name: 'Mike Powers', weight: 3, symbol: 'Office'},
  { position: 4234, name: 'Kate Rose', weight: 5, symbol: 'Office ' },
  { position: 5234, name: 'Linda Jones', weight: 8, symbol: 'Language' },
  
];




export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  
}

