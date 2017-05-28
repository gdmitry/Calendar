import React from "react";
import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";
import Rx from "rxjs/Rx";
import _ from "lodash";

export class ProductTable extends React.Component {
    render() {
        let rows = [];
        let categories = {};

        const products$ = Rx.Observable.from(this.props.products);
        products$.subscribe(
            product => {
                let isFilteredByText = product.name.indexOf(this.props.filterText) !== -1;
                let isFilteredStock = !product.stocked && this.props.inStockOnly;
                let isCategoryRow = !_.has(categories, product.category);

                if (!isFilteredByText || isFilteredStock) {
                    return;
                }

                if (isCategoryRow) {
                    rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
                    categories[product.category] = true;
                } else {
                    rows.push(<ProductRow product={product} key={product.name} />);
                }
            },
            err => {
                console.log(err);
            },
            complete => {
                console.log("complete");
            });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}