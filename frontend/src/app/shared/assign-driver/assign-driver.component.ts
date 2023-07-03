import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DriverService } from 'src/app/Service/driver.service';
import { environment } from 'src/app/environment/environment';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-assign-driver',
  templateUrl: './assign-driver.component.html',
  styleUrls: ['./assign-driver.component.css']
})
export class AssignDriverComponent implements OnInit{
  dataArray: any[] = [];
  baseUrl = environment.baseUrl
  driverArray: any = []
  search!: string;
  currentPage!: number;
  limit!: number;
  selectedSortBy!: string;
  selectedSortOrder!: string;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AssignDriverComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _driver: DriverService,
  ) {}

  
  ngOnInit(): void {
    this.getDriverData()


    this.dataArray = this.data;
    // console.log(this.dataArray)
  }

  //--------------------------------------------GET DRIVER DATA FXN---------------------------------------------
  getDriverData() {
    this._driver.getDriverdata().subscribe({
      next: (response: any) => {
        console.log(response);
        
        this.driverArray = response.driverdata;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}