import { Component ,Inject } from "@angular/core";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
import { MODES, SharedState, SHARED_STATE } from "./sharedState.model";
import { Observer } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { HighlightTrigger } from "./table.animations";

@Component({
    selector: "paTable",
    templateUrl: "table.component.html",
    animations: [HighlightTrigger]
})

export class TableComponent {

    category: any
    constructor(private model: Model, 
        activateRoute: ActivatedRoute
        // @Inject(SHARED_STATE) public observer: Observer<SharedState>
        ){

            activateRoute.params.subscribe(params => {
                this.category = params["category"] || null
            })

        }




    getProduct(key: number): Product{
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts()
        .filter(p => this.category == null || p.category == this.category);
    }

    get categories(): (string| undefined)[] {
        return this.model.getProducts()
                .map(p=>p.category)
                .filter((catetory, index, array)=> array.indexOf(catetory) == index);
    }
    // getProducts(): Product[] {
    //     return this.model.getProducts();
    // }

    deleteProduct(key: number | undefined) {
        
        this.model.deleteProduct(key)
    } 

    highlightCategory: string="";
    getRowState(category: string | undefined): string | undefined{
        return this.highlightCategory == "" ? "":
        this.highlightCategory == category ? "selected" :"notselected"
    }

}