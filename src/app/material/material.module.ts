import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

const materials: any = [MatTableModule, MatPaginatorModule, MatSortModule];
@NgModule({
  imports: [materials],
  exports: [materials],
})
export class MaterialModule {}
