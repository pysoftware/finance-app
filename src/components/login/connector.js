export default (
    {
      login: {
        form: {
          email,
          password,
        },
        isLoading,
        error,
      },
      firebase: {
        auth: {
          uid,
        },
      },
    },
) => ({
  isLoading,
  error,
  email,
  password,
  uid,
});