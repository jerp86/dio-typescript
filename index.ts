interface IUser {
  id: string;
  email: string;
}

interface IAdmin extends IUser {
  office: "manager" | "coordinator" | "supervisor";
}

function redirect(user: IUser | IAdmin) {
  if ("office" in user) {
    // redirecionar para a área de administração
  }

  // redirecionar para a área do usuário
}
