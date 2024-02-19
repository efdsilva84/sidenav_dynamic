import { INavbarData } from "./helper";

export const navbarData: INavbarData[] =  [
  {
    routeLink: 'home',
    icon: 'fa-solid fa-house',
    Label: 'Home'
  },

  {
    routeLink: 'usuario-novo',
    icon: 'fa-solid fa-user-plus',
    Label: 'Novo Colaborador'
  },
  {
    routeLink: 'usuarios',
    icon: 'fa-solid fa-users-line',
    Label: 'Lista Colaboradores'

  },
  {
    routeLink: 'registros',
    icon: 'fa-solid fa-user-clock',
    Label: 'Registros'
  },
  {
    routeLink: 'cardapio',
    icon: 'fa-solid fa-utensils',
    Label: 'Montar Cardapio',

    items:[
      {
        routeLink:'list-car',
        Label: 'Listar Carros',
        icon: 'fa-solid fa-folder-open',

      },
      {
        routeLink:'list-usercredential',
        Label: 'Usuários Credenciais',
        icon: 'fa-solid fa-folder-open',


      }
    ]
  }
]
