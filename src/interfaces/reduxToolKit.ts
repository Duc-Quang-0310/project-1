export interface iCounterState {
    value: number,
    status: 'idle' | 'loading' | 'failed';
  }

export interface iLogging{
  loggedIn: boolean
}