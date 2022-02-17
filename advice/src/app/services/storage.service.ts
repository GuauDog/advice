import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';


export interface Item {

  id: number,
  title: string,
  value: string,
  modified: number

}

export interface User {

  id: number,
  nombre: string;
  email: string;
  telefono: number;
  password: string;

}

const ITEMS_KEY = 'my-items'

@Injectable({

  providedIn: 'root'

})

export class StorageService {

  constructor(
    private router: Router,
    private storage: Storage

  ) { }

  addUser(user: User): Promise<any> {

    return this.storage.get('Data-User').then((users: User[]) => {

      if (users) {

        users.push(user);
        return this.storage.set('Data-User', users);

      } else {

        return this.storage.set('Data-User', [user]);

      }

    });

  }
  getUser(): Promise<User[]> {

    return this.storage.get('Data-User');

  }

  updateUser(user: User): Promise<any> {

    return this.storage.get('Data-User').then((users: User[]) => {

      if (!users || users.length === 0) {

        return null;

      }

      let newUser: User[] = [];
      for (let i of users) {

        if (i.id === user.id) {

          newUser.push(user);
          console.log('1')
          return this.storage.set('Data-User', newUser);


        } else {

          newUser.push(i);
          console.log('2')
          return this.storage.set('Data-User', newUser);


        }
      }




    });

  }
  deleteUser(id: number): Promise<User> {

    return this.storage.get('Data-User').then((users: User[]) => {

      if (!users || users.length === 0) {

        return null;

      }

      let toKeep: User[] = [];
      for (let u of users) {

        if (u.id != id) {

          toKeep.push(u);

        }
      }

      return this.storage.set('Data-User', toKeep);

    });

  }

}