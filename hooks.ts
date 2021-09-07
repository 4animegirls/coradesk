import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState } from './src/reducers'
import { store } from './app'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector