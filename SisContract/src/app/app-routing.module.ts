import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'empregadohome',
    loadChildren: () => import('./pages/empregado/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'empresahome',
    loadChildren: () => import('./pages/empresa/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'empregadopropostas',
    loadChildren: () => import('./pages/empregado/propostas/propostas.module').then( m => m.PropostasPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
