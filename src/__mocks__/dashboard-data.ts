export const mockDashboardValid = {
  user: {
  id: 42,
  name: "Thaynara Dutra",
  role: "admin",
  authenticated: true
},
  metrics: {
    total_users: 1200,
    active_users: 875,
    inactive_users: 290,
    admin_users: 35,
    users_by_region: [
      { region: "RJ", count: 400 },
      { region: "SP", count: 600 },
      { region: "MG", count: 200 }
    ],
    last_users: [
      {
        "name": "Roberto Santana",
        "email": "roberto.santana452@email.com",
        "region": "SP"
      },
      {
        "name": "Lucas Martins",
        "email": "lucas.martins386@email.com",
        "region": "RJ"
      },
      {
        "name": "Daniel Pinto",
        "email": "daniel.pinto944@email.com",
        "region": "MG"
      },
      {
        "name": "Simone Borges",
        "email": "simone.borges344@email.com",
        "region": "SP"
      },
      {
        "name": "Carla Souza",
        "email": "carla.souza67@email.com",
        "region": "RJ"
      },
      {
        "name": "Vinícius Moreira",
        "email": "vinícius.moreira855@email.com",
        "region": "MG"
      },
      {
        "name": "Marcelo Ramos",
        "email": "marcelo.ramos908@email.com",
        "region": "SP"
      },
      {
        "name": "Leonardo Guimarães",
        "email": "leonardo.guimarães100@email.com",
        "region": "RJ"
      },
      {
        "name": "João Santos",
        "email": "joão.santos673@email.com",
        "region": "MG"
      },
      {
        "name": "Carolina Fonseca",
        "email": "carolina.fonseca556@email.com",
        "region": "SP"
      }
    ]
  }
}

export const mockDashboardInvalid = {
  user: {
    name: "None",
    role: "None", 
    authenticated: 1
  },
  metrics: {
    total_users: "1200",
    active_users: 875,
    admin_users: null,
    ghost_users: -5,
    users_by_region: [
      { region: "SP", count: 600 },
      { region: "RJ", count: 400 },
      { region: "MG", count: 200 }
    ]
  }
};

export const mockDashboardViewer = {
  user: {
    id: 103,
    name: "Fulano de Tal",
    role: "viewer",
    authenticated: true
  },
  metrics: {
    total_users: "1200",
    active_users: 875,
    admin_users: null,
    ghost_users: -5,
    users_by_region: [
      { region: "RJ", count: 400 },
      { region: "SP", count: 600 },
      { region: "MG", count: 200 }
    ],
    last_users: [
      {
        "name": "Roberto Santana",
        "email": "roberto.santana452@email.com",
        "region": "SP"
      },
      {
        "name": "Lucas Martins",
        "email": "lucas.martins386@email.com",
        "region": "RJ"
      },
      {
        "name": "Daniel Pinto",
        "email": "daniel.pinto944@email.com",
        "region": "MG"
      },
      {
        "name": "Simone Borges",
        "email": "simone.borges344@email.com",
        "region": "SP"
      },
      {
        "name": "Carla Souza",
        "email": "carla.souza67@email.com",
        "region": "RJ"
      },
      {
        "name": "Vinícius Moreira",
        "email": "vinícius.moreira855@email.com",
        "region": "MG"
      },
      {
        "name": "Marcelo Ramos",
        "email": "marcelo.ramos908@email.com",
        "region": "SP"
      },
      {
        "name": "Leonardo Guimarães",
        "email": "leonardo.guimarães100@email.com",
        "region": "RJ"
      },
      {
        "name": "João Santos",
        "email": "joão.santos673@email.com",
        "region": "MG"
      },
      {
        "name": "Carolina Fonseca",
        "email": "carolina.fonseca556@email.com",
        "region": "SP"
      }
    ]
  }
};