import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  location: any;
    routerSubscription: any;

    constructor(private router: Router,private activatedRoute: ActivatedRoute,  
      private titleService: Title) {
    }

    ngOnInit(){
        this.recallJsFuntions();

        // this.router.events.pipe(  
        //   filter(event => event instanceof NavigationEnd),  
        // ).subscribe(() => {  
        //   const rt = this.getChild(this.activatedRoute);  
        //   rt.data.subscribe(data => {  
        //     console.log(data);  
        //     this.titleService.setTitle(data.title)});  
        // });
    }

  recallJsFuntions() {
    this.router.events
    .subscribe((event) => {
    
        if ( event instanceof NavigationStart ) {
            $('.preloader').fadeIn('slow');
        }
    });
    this.routerSubscription = this.router.events
    .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
    .subscribe(event => {
     // Bottom To Top Scroll Script
	$(window).on('scroll', function() {
		var height = $(window).scrollTop();
		if (height > 100) {
			$('#back2Top').fadeIn();
		} else {
			$('#back2Top').fadeOut();
		}
	});
	
	
	// Script For Fix Header on Scroll
	$(window).on('scroll', function() { 
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$(".header").addClass("header-fixed");
		} else {
			$(".header").removeClass("header-fixed");
		}
	});

        $.getScript('../assets/js/custom.js');
        $('.preloader').fadeOut('slow');
        this.location = this.router.url;
        if (!(event instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0);
    });
}

getChild(activatedRoute: ActivatedRoute) {  
  if (activatedRoute.firstChild) {  
    return this.getChild(activatedRoute.firstChild);  
  } else {  
    return activatedRoute;  
  }  

}
}
