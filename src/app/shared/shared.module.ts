import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TagCardComponent } from './components/tag-card/tag-card.component';
import { AboutInfoComponent } from './components/about-info/about-info.component';
import { CounselingComponent } from './components/counseling/counseling.component';
import { FeaturesComponent } from './components/features/features.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { WorkProcessComponent } from './components/work-process/work-process.component';
import { TrainingCardComponent } from './components/training-card/training-card.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContentLoaderComponent } from './components/content-loader/content-loader.component';
import { TrainingPipe } from './pipes/training.pipe';
import { PlacedCompaniesComponent } from './components/placed-companies/placed-companies.component';
import { MentorCardComponent } from './components/mentor-card/mentor-card.component';
import { MentorListComponent } from './components/mentor-list/mentor-list.component';
import { TestimonialListComponent } from './components/testimonial-list/testimonial-list.component';





@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CourseCardComponent,
    TestimonialCardComponent,
    TagCardComponent,
    AboutInfoComponent,
    CounselingComponent,
    FeaturesComponent,
    BreadcrumbComponent,
    WorkProcessComponent,
    TrainingCardComponent,
    ContentLoaderComponent,
    TrainingPipe,
    PlacedCompaniesComponent,
    MentorCardComponent,
    MentorListComponent,
    TestimonialListComponent


  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    FormsModule,
    RouterModule

  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    CourseCardComponent,
    TestimonialCardComponent,
    TagCardComponent,
    AboutInfoComponent,
    CounselingComponent,
    FeaturesComponent,
    BreadcrumbComponent,
    WorkProcessComponent,
    TrainingCardComponent,
    ContentLoaderComponent,
    TrainingPipe,
    PlacedCompaniesComponent,
    MentorCardComponent,
   MentorListComponent,
   TestimonialListComponent

  ],
})
export class SharedModule { }
