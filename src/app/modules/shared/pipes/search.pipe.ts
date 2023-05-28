import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../../invoice/interfaces/product.interface";

@Pipe({ name: 'appSearch' })
export class SearchPipe implements PipeTransform {
    transform(items: Product[], searchText: string) {
        if (!items) {
            return [];
        } else if (!searchText) {
            return [];
        }
        searchText = searchText.toLocaleLowerCase();

        return items.filter((product: Product) => product.name.toLocaleLowerCase().includes(searchText) || product.description.toLocaleLowerCase().includes(searchText)).slice(0, 5);
    }
}