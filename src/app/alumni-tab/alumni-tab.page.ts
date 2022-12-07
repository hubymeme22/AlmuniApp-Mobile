import { Component, OnInit } from '@angular/core';
import { RequestlibService } from '../Services/requestlib.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumni-tab',
  templateUrl: './alumni-tab.page.html',
  styleUrls: ['./alumni-tab.page.scss'],
})
export class AlumniTabPage {
  page = 0;
  perPage = 5;
  array: any[] = [
    {
      id: 1,
      image: 'pic ',
      name: 'Yeet',
      address: 'dummy address',
      department: '12344556',
      course: 'BSCS',
      stat: 'TAMBAY',
    },
    {
      id: 2,
      image: 'pic ',
      name: 'Hubert Espinola',
      address: 'dummy',
      department: 'ffdfdfsdfdfsfrs',
      course: 'BSCS',
      stat: 'TAMBAY',
    },
    {
      id: 3,
      image: 'pic ',
      name: 'Jello Santos',
      address: 'dummy',
      department: '545454545',
      course: 'BSCS',
      stat: 'TAMBAY',
    },
    {
      id: 4,
      image: 'pic ',
      name: 'Joshua Reano',
      address: 'dummy address',
      department: '12344556',
      course: 'BSCS',
      stat: 'TAMBAY',
    },
    {
      id: 5,
      image: 'pic ',
      name: 'Joshua Reano',
      address: 'dummy address',
      department: '12344556',
      course: 'BSCS',
      stat: 'TAMBAY',
    },
    {
      id: 6,
      image: 'pic ',
      name: 'Joshua Reano',
      address: 'dummy address',
      department: '12344556',
      course: 'BSCS',
      stat: 'TAMBAY',
    },
    {
      id: 7,
      image: 'pic ',
      name: 'Joshua Reano',
      address: 'dummy address',
      department: '12344556',
      course: 'BSCS',
      stat: 'TAMBAY',
    },
    {
      id: 8,
      image: 'pic ',
      name: 'Joshua Reano',
      address: 'dummy address',
      department: '12344556',
      course: 'BSCS',
      stat: 'TAMBAY',
    },
    {
      id: 9,
      image: 'pic ',
      name: 'Joshua Reano',
      address: 'dummy address',
      department: '12344556',
      course: 'BSCS',
      stat: 'TAMBAY',
    },
    {
      id: 10,
      image: 'pic',
      name: 'Joshua Reano',
      address: 'dummy address',
      department: '12344556',
      course: 'BSCS',
      stat: 'TAMBAY',
    },
  ];
  lists: any[] = [];

  constructor(
    private requestlib: RequestlibService,
    private loadingCtrl: LoadingController,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.requestlib.setURI('http://192.168.1.10');
    this.paginateArray();
  }

  paginateArray() {
    const accepted = (response) => {
      console.log(response);
      if (response.status == 200) {
        if (response.data.status == 'invalid_token') {
          console.log('whutt???');
          this.router.navigate(['/']);
        } else {
          this.lists = response.data.data;
        }
      }
    };

    // get all the alumni
    this.requestlib.getAlumni('', accepted);
  }

  loadMore(event) {
    console.log(event);
    this.paginateArray();
    event.target.complete();
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Retrieving Data...',
      duration: 2000,
      spinner: 'circles',
    });

    loading.present();
  }
}
