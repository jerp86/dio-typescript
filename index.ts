interface IUser {
  id: string;
  email: string;
  office?: "manager" | "coordinator" | "supervisor" | "employee";
}

function redirect(user: IUser) {
  if (user.office) {
    // redirecionar para a área de administração
  }

  // redirecionar para a área do usuário
}
