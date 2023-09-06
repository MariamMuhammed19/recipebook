import { NgModule } from "@angular/core";
import { ListComponent } from "./list/list.component";
import { ViewComponent } from "./view/view.component";
import { FormComponent } from "./form/form.component";
import { CommonModule } from "@angular/common";
import { RecipesRoutingModule } from "./recipes-routing.module";

@NgModule({
    declarations:[
        ListComponent,
        ViewComponent,
        FormComponent
    ],
    imports:[
        CommonModule,
        RecipesRoutingModule
    ],
    exports:[
        ListComponent
    ]
})

export class RecipeModule{
    
}