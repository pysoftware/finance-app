const Logout = () => async (
    dispatch,
    getState,
    {getFirebase},
) => {
  try {
    await getFirebase().auth().signOut();
  } catch (error) {
    console.error(error);
  }
};

export default Logout;