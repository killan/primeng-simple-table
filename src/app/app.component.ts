import { Component } from '@angular/core';
import { ListComponent } from './components/cell-components/list/list.component';
import { spacecrafts, SpacecraftStatus, spacecraftTypes } from './data/spacecrafts';
import { CellComponentEventsList, CellComponentOptionsList } from './interfaces/cell-component';
import { ColumnDef } from './interfaces/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = spacecrafts

  cols: ColumnDef[] = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
    {
      field: 'type',
      header: 'Type',
      components: [
        {
          component: ListComponent,
          options: {
            items: spacecraftTypes,
            itemLabel: 'label',
            itemValue: 'id'
          } as CellComponentOptionsList,
          events: {
            change: (originalEvent: any, rowData: any, field: any) => {
              console.log(field + ' : ' + rowData[field])
            }
          } as CellComponentEventsList
        }
      ]
    },
    {
      field: 'status',
      header: 'Status',
      renderer: (rowData, field) => rowData[field] === SpacecraftStatus.Active ? 'Active' : 'Destroyed'
    },
    { field: 'univers', header: 'Univers' }
  ]
}
