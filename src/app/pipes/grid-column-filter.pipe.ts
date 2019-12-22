import { Pipe, PipeTransform } from '@angular/core';
import { SgGridColumn } from '../components/controls/sg-grid/sg-grid.component';

@Pipe({
  name: 'gridColumnFilter'
})
export class GridColumnFilterPipe implements PipeTransform {

  transform(columns: SgGridColumn[]): SgGridColumn[] {
    if(!columns){
      return columns;
    }
    return columns.filter(col=>{
      return !col.hidden;
    })
  }

}
