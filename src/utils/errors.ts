/** Apresenta um erro curto e seguro nos formulários e nas telas do app. */
export function friendlyError(error: unknown): string {
  const fallback = 'Não foi possível concluir a operação. Tente novamente.';
  if (!(error instanceof Error)) return fallback;

  const message = error.message || fallback;
  if (/invalid login credentials/i.test(message)) return 'E-mail ou senha incorretos.';
  if (/email not confirmed/i.test(message)) return 'Confirme seu e-mail antes de entrar.';
  if (/user already registered/i.test(message)) return 'Este e-mail já está cadastrado.';
  if (/failed to fetch|network request failed|networkerror/i.test(message)) {
    return 'Sem conexão com o servidor. Confira sua internet.';
  }
  if (/row-level security/i.test(message)) {
    return 'Você não tem permissão para realizar esta ação.';
  }
  return message;
}
