import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path: 'cities/:id', 
  component: CitiesComponent,
  // children : [
  //   {
  //     path: 'cities/:id/posts/:postId',
  //     component: PostComponent

  //   }
  // ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
