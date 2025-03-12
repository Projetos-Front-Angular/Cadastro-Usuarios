import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment.development';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { CrudComponent } from './pages/crud/crud.component';
import { ModalViewUserComponent } from './pages/crud/modal-view-user/modal-view-user.component';
import { ModalFormUserComponent } from './pages/crud/modal-form-user/modal-form-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,    
    LoginComponent, 
    HomeComponent, 
    MenuComponent, 
    CrudComponent, ModalViewUserComponent, ModalFormUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,    
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({"projectId":"crudusuarios02","appId":"1:646983376842:web:290332829395b1eb01b933","storageBucket":"crudusuarios02.appspot.com","apiKey":"AIzaSyAiQDYc7kiahC6jLnF5jSC3QowImhTF0go","authDomain":"crudusuarios02.firebaseapp.com","messagingSenderId":"646983376842"})),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp({"projectId":"crud-usuarios-angular-72bac","appId":"1:514600154741:web:2bde003bcff9abfbd06a3c","storageBucket":"crud-usuarios-angular-72bac.appspot.com","apiKey":"AIzaSyD9ww2jUAgm6ZCKufL2kH6jUX7llINRF-I","authDomain":"crud-usuarios-angular-72bac.firebaseapp.com","messagingSenderId":"514600154741"}))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
