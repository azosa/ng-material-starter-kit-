import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CryptoChipsComponent } from './components/crypto-chips/crypto-chips.component';
import { HolidaysListComponent } from './components/holidays-list/holidays-list.component';
import { CategoryCheckboxComponent } from './components/category-checkbox/category-checkbox.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { AgePredictionComponent } from './components/age-prediction/age-prediction.component';
import { CartComponent } from './components/cart/cart.component';
import { UserComponent } from './components/user/user.component';
import { GenderPredictionComponent } from './components/gender-prediction/gender-prediction.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoryListComponentModule } from './components/category-list/category-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoChipsComponentModule } from './components/crypto-chips/crypto-chips.component-module';
import { HolidaysListComponentModule } from './components/holidays-list/holidays-list.component-module';
import { CategoryCheckboxComponentModule } from './components/category-checkbox/category-checkbox.component-module';
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { LoginFormComponentModule } from './components/login-form/login-form.component-module';
import { LoginServiceModule } from './services/login.service-module';
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';
import { RegisterServiceModule } from './services/register.service-module';
import { ProductTableComponentModule } from './components/product-table/product-table.component-module';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatFactServiceModule } from './services/cat-fact.service-module';
import { AgePredictionComponentModule } from './components/age-prediction/age-prediction.component-module';
import { CartComponentModule } from './components/cart/cart.component-module';
import { CartServiceModule } from './services/cart.service-module';
import { UserComponentModule } from './components/user/user.component-module';
import { UserServiceModule } from './services/user.service-module';
import { GenderPredictionComponentModule } from './components/gender-prediction/gender-prediction.component-module';
import { GenderPredictionServiceModule } from './services/gender-prediction.service-module';

@NgModule({
  imports: [RouterModule.forRoot(
    [{ path: 'products', component: ProductListComponent }, { path: 'categories', component: CategoryListComponent }, { path: 'crypto', component: CryptoChipsComponent }, { path: 'public-holidays', component: HolidaysListComponent }, { path: 'checkbox-categories', component: CategoryCheckboxComponent }, { path: 'categories-menu', component: CategoriesMenuComponent }, { path: 'create-product', component: ProductFormComponent }, { path: 'create-employee', component: EmployeeFormComponent }, { path: 'login', component: LoginFormComponent }, { path: 'register', component: RegisterFormComponent }, { path: 'product-search', component: ProductTableComponent }, { path: 'product/:id', component: ProductDetailsComponent }, { path: 'cat-fact', component: CatFactComponent }, { path: 'age/:name', component: AgePredictionComponent }, { path: 'cart/:id', component: CartComponent }, { path: 'user/:id', component: UserComponent }, { path: 'gender/:name', component: GenderPredictionComponent }]), ProductListComponentModule, ProductsServiceModule, CategoryListComponentModule, CategoriesServiceModule, CryptoChipsComponentModule, HolidaysListComponentModule, CategoryCheckboxComponentModule, CategoriesMenuComponentModule, ProductServiceModule, EmployeeFormComponentModule, EmployeeServiceModule, LoginFormComponentModule, LoginServiceModule, RegisterFormComponentModule, RegisterServiceModule, ProductTableComponentModule, ProductDetailsComponentModule, CatFactComponentModule, CatFactServiceModule, AgePredictionComponentModule, CartComponentModule, CartServiceModule, UserComponentModule, UserServiceModule, GenderPredictionComponentModule, GenderPredictionServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
