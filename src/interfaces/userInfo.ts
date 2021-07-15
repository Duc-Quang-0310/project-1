export interface iUserInfoState  {
    name: string,
    age?: number,
    district: string,
    subdistrict: string,
    city: string,
    displayName: string,
}

export interface iPersonalInfo {
    label: string,
    style: object,
    name: string,
    value: any,
    id: string
} 

export interface iStateInfo {
    NewInfo:iUserInfoState
    setNewInfo: React.Dispatch<React.SetStateAction<iUserInfoState>>
}









