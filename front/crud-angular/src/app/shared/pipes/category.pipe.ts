import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  transform(value: string): string {
    let nameCateogry = value.toLowerCase();
    switch (nameCateogry) {
      case 'front-end':
        return 'code';
        break;
      case 'back-end':
        return 'computer';
        break;
      default:
        return 'report_problem';
        break;
    }
  }
}
