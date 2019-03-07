import {NgModule} from "@angular/core";

/*import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';*/
import * as Material from "@angular/material";

@NgModule({
  imports:[
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatToolbarModule,
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatMenuModule,
    Material.MatSidenavModule,
    Material.MatListModule,
    Material.MatSelectModule,
    Material.MatDividerModule,
    Material.MatCardModule,
    Material.MatRadioModule,
    Material.MatCheckboxModule,
    Material.MatDialogModule,
    Material.MatGridListModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatProgressSpinnerModule,
    Material.MatPaginatorModule,
    Material.MatSortModule
  ],
  exports:[
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatToolbarModule,
    Material.MatButtonModule,
    Material.MatIconModule,
    Material.MatMenuModule,
    Material.MatSidenavModule,
    Material.MatListModule,
    Material.MatSelectModule,
    Material.MatDividerModule,
    Material.MatCardModule,
    Material.MatRadioModule,
    Material.MatCheckboxModule,
    Material.MatDialogModule,
    Material.MatGridListModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatProgressSpinnerModule,
    Material.MatPaginatorModule,
    Material.MatSortModule
  ]
})

export class MaterialModule {}