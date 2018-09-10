import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NewrouteComponent } from './newroute/newroute.component';
import { FoodComponent } from './food/food.component';
import { FruitsComponent } from './fruits/fruits.component';
import { CooldrinksComponent } from './cooldrinks/cooldrinks.component';
import { RouterModule, Routes } from '@angular/router';
import { Sweet1Component } from './sweet1/sweet1.component';
import { Sweet2Component } from './sweet2/sweet2.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { PeraComponent } from './pera/pera.component';
import { ChilComponent } from './chil/chil.component';
import { ParentoutputComponent } from './parentoutput/parentoutput.component';
import { ChildoutputComponent } from './childoutput/childoutput.component';
import { NewformComponent } from './newform/newform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { CourseComponent } from './course/course.component';

const appRoutes:Routes=[
  {path:"",redirectTo:"/food", pathMatch:"full"},
  {path:"food",component:FoodComponent},
  {path:"fruits",component:FruitsComponent},
  {path:"cooldrinks",component:CooldrinksComponent,
  children: [                          //<---- child components declared here
    {
        path:'sweet1',
        component: Sweet1Component,
        children:[
          {path:"fruits",component:FruitsComponent}
        ]
    },
    {
      path:'sweet2',
      component: Sweet2Component
  },
    
  ]

},
{path:"signup",component:SignupComponent},
  // {path:"cooldrinks/sweet1",component:Sweet1Component}

]
@NgModule({
  declarations: [
    AppComponent,
    NewrouteComponent,
    FoodComponent,
    FruitsComponent,
    CooldrinksComponent,
    Sweet1Component,
    Sweet2Component,
    FavouriteComponent,
    PeraComponent,
    ChilComponent,
    ParentoutputComponent,
    ChildoutputComponent,
    NewformComponent,
    SignupComponent,
    FooterComponent,
    CourseComponent,
  
  
  ],
 
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
