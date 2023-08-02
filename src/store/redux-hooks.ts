import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './store'

export type ThunkAppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = (): ThunkAppDispatch => useDispatch<AppDispatch>()
