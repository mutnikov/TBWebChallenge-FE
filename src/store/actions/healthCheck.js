export const healthCheckActionsType = {
  HEALTH_CHECK: 'HEALTH_CHECK',
};

export const healthCheck = () => ({
  type: healthCheckActionsType.HEALTH_CHECK,
});
