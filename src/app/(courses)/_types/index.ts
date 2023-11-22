import type { Student } from '@/types';

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
