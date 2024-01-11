export const Logger = (state) => (next) => (action) => {
    console.log('Current state ==>', state.getState());
    console.log('Action ==>', action.type);
    next(action)
    console.log('Next state ==>', state.getState());

}