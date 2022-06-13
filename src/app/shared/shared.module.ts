import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
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



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CourseCardComponent,
    TestimonialsComponent,
    TagCardComponent,
    AboutInfoComponent,
    CounselingComponent,
    FeaturesComponent,
    BreadcrumbComponent,
    WorkProcessComponent,
    TrainingCardComponent,

  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    FormsModule
    
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    CourseCardComponent,
    TestimonialsComponent,
    TagCardComponent,
    AboutInfoComponent,
    CounselingComponent,
    FeaturesComponent,
    BreadcrumbComponent,
    WorkProcessComponent,
    TrainingCardComponent
  ],
})
export class SharedModule { }
