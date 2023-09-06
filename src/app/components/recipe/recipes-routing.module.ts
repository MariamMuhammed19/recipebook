import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { FormComponent } from "./form/form.component";
import { ViewComponent } from "./view/view.component";

const routes:Routes=[
    {path:'',component:ListComponent},
    {path:'add-recipe',component:FormComponent},
    {path:'edit-recipe',component:FormComponent},
    {path:'view-recipe',component:ViewComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class RecipesRoutingModule{

}