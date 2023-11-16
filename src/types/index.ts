
export type Student = {
  id: number
  name: string
  email: string
  age: number
  gender: string
}
export type Course = {
  id: number
  name: string
  classroom: string
  capacity: number
  teacher: string
  description?: string
  active: boolean
  students: Array<Student> 
}
