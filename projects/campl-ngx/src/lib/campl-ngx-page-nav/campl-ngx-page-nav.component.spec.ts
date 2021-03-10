import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';

import { CamplNgxPageNavComponent } from './campl-ngx-page-nav.component';

import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA, Component, Input, OnInit } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing'; // spy
import { Message } from '../models/message';

// import { CamplNgxMessageComponent } from '../campl-ngx-message/campl-ngx-message.component';


describe('CamplNgxPageNavComponent', () => {

    let heading= "Test Nav";
    let initialIndex = 0;
    let fixture;
    let comp;
    let navDe;
    let navEl;
    let navNextDe;
    let navPrevDe;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                CamplNgxPageNavComponent],
        });

        fixture = TestBed.createComponent(CamplNgxPageNavComponent);
        comp = fixture.componentInstance;

        navDe = fixture.debugElement.query(By.css('.pageNav'));
        navEl = navDe.nativeElement;

        // Not available until the detectChanges() has run:
        //navNextDe = fixture.debugElement.query(By.css('#nextNav'))
        //navPrevDe = fixture.debugElement.query(By.css('#prevNav'))

        // set the input properties

        comp.heading = heading;
        comp.initialIndex = initialIndex;
        comp.values = [
            {id:'item 1',printOut: function(){return this.id}},
            {id:'item 2',printOut: function(){return this.id}},
            {id:'item 3',printOut: function(){return this.id}}
        ];
        comp.displayValue = true;

        fixture.detectChanges();

    });

    it('should create', () => {
        expect(navEl.textContent).toContain(comp.values[initialIndex].id);

        // check that no previous link exists (starting at one)

        // click on the next
        navNextDe = fixture.debugElement.query(By.css('#nextNav'))

        // currentEle will test the @Output current
        let currentEle
        comp.current.subscribe((ele) => currentEle = ele);

        navNextDe.triggerEventHandler('click', null);

        // test the output value from the click - remember async!!
        expect(currentEle.id).toBe('item 2');

        fixture.detectChanges();

        // We have gone to the next entry tetst heading
        expect(navEl.textContent).toContain(comp.values[initialIndex+1].id);

        // A previous link exists
        navPrevDe = fixture.debugElement.query(By.css('#prevNav'))
        expect(navPrevDe.nativeElement.textContent).toContain('Previous');

        // click on the next

        navNextDe = fixture.debugElement.query(By.css('#nextNav'))
        navNextDe.triggerEventHandler('click', null);

        fixture.detectChanges();

        // check at the end of the options that no next link exists
        navNextDe = fixture.debugElement.query(By.css('#nextNav'))
        expect(navNextDe).toBeFalsy()

    });

});
