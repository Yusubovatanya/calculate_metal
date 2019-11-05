import { Component, OnInit, Input } from '@angular/core';
import { MetalDataService } from 'src/app/core/services/metal-data.service';
import { TableTitles } from 'src/app/core/models/table-titles.model';
import { DataTable } from 'src/app/core/models/data-table.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() dataTable: DataTable;
  tableTitles: TableTitles;
  tableFirstTitle: string;
  tableSecondTitle: any;
  qtyColspan: any;
  constructor(
    private service: MetalDataService,
  ) { }

  ngOnInit() {
    this.service.getTableTitles().subscribe((obj: TableTitles) => {
      this.tableTitles = obj;
    });
    console.log(this.dataTable)
    this.prepareDataTable();
    this.isShowElement();
  }

  prepareDataTable() {
    this.tableFirstTitle = this.tableTitles[this.dataTable.type.value].firstParameter;
    this.tableSecondTitle = this.tableTitles[this.dataTable.type.value].secondParameter;
  }

  isShowElement() {
    return this.dataTable.values.filter(el => {
      return el
    }).length
  }

}
