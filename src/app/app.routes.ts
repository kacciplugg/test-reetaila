import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { CompanyComponent } from './company/company.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { PendingComponent } from './pending/pending.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'onboarding', component: OnboardingComponent },
  { path: 'pending', component: PendingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
