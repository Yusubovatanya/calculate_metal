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

  constructor(
    private service: MetalDataService,
  ) { }

  ngOnInit() {
    this.tableTitles = this.service.tableTitles
    this.determineQtyColspan();
  }

  determineQtyColspan() {
    return this.dataTable.values.filter(el => el).length;
  }

}
