import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ReserrvationComponentDataSource, ReserrvationComponentItem } from './reserrvation-component-datasource';

@Component({
  selector: 'app-reserrvation-component',
  templateUrl: './reserrvation-component.component.html',
  styleUrl: './reserrvation-component.component.css'
})
export class ReserrvationComponentComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ReserrvationComponentItem>;
  dataSource = new ReserrvationComponentDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
