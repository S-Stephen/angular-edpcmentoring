import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync
} from '@angular/core/testing';

import { CamplNgxHeaderComponent } from './campl-ngx-header.component';

import { CamplNgxQuicklinksComponent } from '../campl-ngx-quicklinks/campl-ngx-quicklinks.component';

import { CamplService } from '../services/campl.service';

import { Injectable } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing'; // spy

import { By } from '@angular/platform-browser';

@Injectable()
class MockCamplService {
  private config: any;
  public getConfig(): any {
    return (this.config = {
      page_title: 'EDPC Mentoring',
      local_footer_col1: [
        {
          label: 'About the Scheme',
          link: 'https://edpc.eng.cam.ac.uk/mentoring'
        }
      ],
      local_footer_col2: [
        { label: 'About the EDPC', link: 'https://edpc.eng.cam.ac.uk/aboutus' }
      ],
      quicklinks: [
        { link: 'http://www.cam.ac.uk/for-staff', label: 'For staff' },
        {
          link: 'http://www.cam.ac.uk/current-students',
          label: 'For current students'
        },
        { link: 'http://www.alumni.cam.ac.uk', label: 'For alumni' },
        { link: 'http://www.cam.ac.uk/for-business', label: 'For business' },
        {
          link: 'http://www.cam.ac.uk/colleges-and-departments',
          label: 'Colleges & departments'
        },
        {
          link: 'http://www.lib.cam.ac.uk/libraries/',
          label: 'Libraries & facilities'
        },
        {
          link: 'http://www.cam.ac.uk/museums-and-collections',
          label: 'Museums & collections'
        },
        {
          link: 'http://www.cam.ac.uk/email-and-phone-search',
          label: 'Email & phone search'
        }
      ],
      // it is assumed that a top tier label without a link navigates to a lower menu
      // we could do with a better model here:
      // eg anchor ids should be produced dynamically
      // we could use a calss / interface
      global_nav: [
        {
          label: 'Study at Cambridge',
          link: 'http://www.cam.ac.uk/study-at-cambridge',
          anchor: 'studyatcambridge',
          sub: [
            {
              label: 'Undergraduate',
              link: 'http://www.study.cam.ac.uk/undergraduate/',
              sub: [
                {
                  label: 'Course',
                  link: 'http://www.undergraduate.study.cam.ac.uk/courses'
                },
                {
                  label: 'Applying',
                  link: 'http://www.undergraduate.study.cam.ac.uk/applying'
                },
                {
                  label: 'Events and open days',
                  link: 'http://www.undergraduate.study.cam.ac.uk/events'
                },
                {
                  label: 'Fees and Finances',
                  link: 'http://www.undergraduate.study.cam.ac.uk/financess'
                },
                {
                  label: 'Student blogs and videos',
                  link: 'http://www.becambridge.com/'
                }
              ]
            },
            {
              label: 'Graduate',
              link: 'http://www.graduate.study.cam.ac.uk',
              sub: [
                {
                  label: 'Why Cambridge',
                  link:
                    'http://www.graduate.study.cam.ac.uk/why-cambridge/welcome-vice-chancellor'
                },
                {
                  label: 'How to apply',
                  link: 'http://www.graduate.study.cam.ac.uk/how-do-i-apply'
                },
                {
                  label: 'Fees and funding',
                  link:
                    'http://www.cambridgestudents.cam.ac.uk/fees-and-funding'
                },
                {
                  label: 'Frequently asked questions',
                  link: 'http://www.graduate.study.cam.ac.uk/faqs/applicant'
                }
              ]
            },
            {
              label: 'International students',
              link: 'http://www.internationalstudents.cam.ac.uk'
            },
            {
              label: 'Continuing education',
              link: 'http://www.ice.cam.ac.uk'
            },
            {
              label: 'Executive and professional education',
              link: 'http://www.epe.admin.cam.ac.uk/'
            },
            {
              label: 'Courses in education',
              link: 'http://www.educ.cam.ac.uk'
            }
          ]
        },
        {
          label: 'About the University',
          link: 'http://www.cam.ac.uk/about-the-university',
          anchor: 'abouttheuniversity',
          sub: [
            {
              sub: [
                // arrays of arrays to be split campl-column4
                // each array is a column
                {
                  label: 'How the University and Colleges work',
                  link:
                    'http://www.cam.ac.uk/about-the-university/how-the-university-and-colleges-work',
                  sub: []
                },
                {
                  label: 'History',
                  link: 'http://www.cam.ac.uk/about-the-university/history'
                },
                {
                  label: 'Visiting the University',
                  link:
                    'http://www.cam.ac.uk/about-the-university/visiting-the-university'
                },
                {
                  label: 'Term dates and calendars',
                  link:
                    'http://www.cam.ac.uk/about-the-university/term-dates-and-calendars'
                },
                {
                  label: 'Map',
                  link: 'http://map.cam.ac.uk'
                }
              ]
            },
            {
              sub: [
                {
                  label: 'For media',
                  link: 'http://www.communications.cam.ac.uk/'
                },
                {
                  label: 'Video and audio',
                  link: 'http://www.cam.ac.uk/video-and-audio'
                },
                {
                  label: 'Find an expert',
                  link: 'http://webservices.admin.cam.ac.uk/fae/'
                },
                {
                  label: 'Publications',
                  link: 'http://www.cam.ac.uk/about-the-university/publications'
                },
                {
                  label: 'Global Cambridge',
                  link: 'http://www.cam.ac.uk/global-cambridge'
                }
              ]
            },
            {
              sub: [
                { link: 'http://www.cam.ac.uk/news', label: 'News' },
                {
                  link: 'http://www.admin.cam.ac.uk/whatson/',
                  label: 'Events'
                },
                {
                  link: 'http://www.cam.ac.uk/public-engagement',
                  label: 'Public engagement'
                },
                {
                  link: 'http://www.jobs.cam.ac.uk',
                  label: 'Jobs'
                },
                {
                  link: 'https://philanthropy.cam.ac.uk',
                  label: 'Give to Cambridge'
                }
              ]
            }
          ]
        },
        {
          label: 'Research at Cambridge',
          link: 'http://www.cam.ac.uk/research'
        }
      ]
    });
  }
}

describe('CamplNgxHeaderComponent', () => {
  let component: CamplNgxHeaderComponent;
  let fixture: ComponentFixture<CamplNgxHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CamplNgxHeaderComponent, CamplNgxQuicklinksComponent],
      providers: [{ provide: CamplService, useClass: MockCamplService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamplNgxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display the menu when click on menu icon (#open-menu) close on click "Home"', fakeAsync(() => {
    const menu_select = By.css('#open-menu');
    const global_nav_select = By.css('.campl-global-navigation-mobile-list');
    const home_link_select = By.css('.campl-home-link-container a');

    expect(fixture.debugElement.query(menu_select)).toBeTruthy();

    // https://stackoverflow.com/questions/41811609/test-freezes-when-expectresult-tobenull-fails-test-angular-2-jasmine
    // menu currently not shown
    let result = fixture.debugElement.query(global_nav_select);
    expect(result === null).toBeTruthy();

    // click on link see menu
    fixture.debugElement
      .query(menu_select)
      .triggerEventHandler('click', { button: 0 });
    tick();
    fixture.detectChanges();

    expect(fixture.debugElement.query(global_nav_select)).not.toBeNull();

    // click 'Home' and we should close

    expect(fixture.debugElement.query(home_link_select)).toBeTruthy();
    fixture.debugElement
      .query(home_link_select)
      .triggerEventHandler('click', { button: 0 });
    tick();
    fixture.detectChanges();

    // back to menu currently not shown
    result = fixture.debugElement.query(global_nav_select);
    expect(result === null).toBeTruthy();
  }));

  it('should display the search form when click on search button #site-search-btn close on click "Home"', fakeAsync(() => {
    const menu_select = By.css('#open-menu');
    const search_form_select = By.css('#site-search-container');
    const site_search_btn_select = By.css('#site-search-btn');

    expect(fixture.debugElement.query(menu_select)).toBeTruthy();
    expect(fixture.debugElement.query(site_search_btn_select)).toBeTruthy();

    // https://stackoverflow.com/questions/41811609/test-freezes-when-expectresult-tobenull-fails-test-angular-2-jasmine
    // current search_form not shown
    let result = fixture.debugElement.query(search_form_select);
    expect(result === null).toBeTruthy();

    // click on link see menu
    fixture.debugElement
      .query(site_search_btn_select)
      .triggerEventHandler('click', { button: 0 });
    tick();
    fixture.detectChanges();

    expect(fixture.debugElement.query(search_form_select)).not.toBeNull();

    // click 'Home' and we should close

    expect(fixture.debugElement.query(menu_select)).toBeTruthy();
    fixture.debugElement
      .query(menu_select)
      .triggerEventHandler('click', { button: 0 });
    tick();
    fixture.detectChanges();

    // back to menu currently not shown
    result = fixture.debugElement.query(search_form_select);
    expect(result === null).toBeTruthy();
  }));

  it('should display the mega menu when we click on one of its links', fakeAsync(() => {
    const study_link_select = By.css('#menu_studyatcambridge');
    const about_link_select = By.css('#menu_abouttheuniversity');

    const study_menu = By.css('#studyatcambridge');
    const about_menu = By.css('#abouttheuniversity');

    expect(fixture.debugElement.query(study_link_select)).toBeTruthy();
    expect(fixture.debugElement.query(about_link_select)).toBeTruthy();

    // https://stackoverflow.com/questions/41811609/test-freezes-when-expectresult-tobenull-fails-test-angular-2-jasmine
    // current search_form not shown
    let result = fixture.debugElement.query(study_menu);
    expect(result === null).toBeTruthy();
    result = fixture.debugElement.query(about_menu);
    expect(result === null).toBeTruthy();

    // click on study_link_menu menu shows the study_menu ()about menu still hidden)
    fixture.debugElement
      .query(study_link_select)
      .triggerEventHandler('click', { button: 0 });
    tick();
    fixture.detectChanges();

    expect(fixture.debugElement.query(study_menu)).toBeTruthy();
    result = fixture.debugElement.query(about_menu);
    expect(result === null).toBeTruthy();

    // with the study menu open, click on the about menu link it will switche the active menus

    // click on study_link_menu menu shows the study_menu ()about menu still hidden)
    fixture.debugElement
      .query(about_link_select)
      .triggerEventHandler('click', { button: 0 });
    tick();
    fixture.detectChanges();

    expect(fixture.debugElement.query(about_menu)).toBeTruthy();
    result = fixture.debugElement.query(study_menu);
    expect(result === null).toBeTruthy();

    // describe('Mega megu navigation', () => {
    //  it('navigates to other menu choice on click on menu', fakeAsync(() => {}));
    // });
  }));
});
