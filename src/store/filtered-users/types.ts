export interface User {
    id: string
    name: string
    city: string
    country: string
}

export interface filterCriteria {
    city?: string
    country?: string
}

export interface FilteredUsersState {
    users: User[]
    filterCriteria: filterCriteria
}
