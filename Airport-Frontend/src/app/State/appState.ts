import { BookingInterface } from "./Reducers/bookingReducer";
import { CounterState } from "./Reducers/counterReducer";
import { SampleState } from "./Reducers/sample";
import { UserInterface } from "./Reducers/user.reducer";
export interface AppState{
    sample:SampleState
    counter:CounterState
    booking:BookingInterface,
    user:UserInterface
}